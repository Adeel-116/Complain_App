import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import appColors from '../constants/color';

const { width, height } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.77;
const IMAGE_HEIGHT = height * 0.2444;

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / IMAGE_WIDTH);
        setCurrentIndex(index);
    };

    const handleDotPress = (index) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5
        });
        setCurrentIndex(index);
    };

    const renderImage = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image
                source={item.imageURL}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );

    return (
        <>
            <View style={styles.sliderContainer}>
                <FlatList
                    ref={flatListRef}
                    data={images}
                    renderItem={renderImage}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={IMAGE_WIDTH}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    onMomentumScrollEnd={handleScroll}
                    scrollEventThrottle={16}
                />
            </View>

            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.paginationDot,
                            currentIndex === index && styles.paginationDotActive
                        ]}
                        onPress={() => handleDotPress(index)}
                    />
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        width: '100%',
        height: IMAGE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    imageContainer: {
        width: IMAGE_WIDTH,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 5,
    },
    paginationDot: {
        width: 6,
        height: 6,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: appColors.primary,
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});

export default ImageSlider;