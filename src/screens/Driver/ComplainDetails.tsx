import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;
const IMAGE_WIDTH = width * 0.8;
const IMAGE_HEIGHT = 210;

const ComplainDetails = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
    const overlayOpacity = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);

    const images = [
        { id: '1', imageURL: require("../../assests/images/truckImage.png") }, 
        { id: '2', imageURL: require("../../assests/images/truckImage.png") },
        { id: '3', imageURL: require("../../assests/images/truckImage.png") },
    ];

    const openDrawer = () => {
        setIsDrawerOpen(true);
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0.5,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeDrawer = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: -DRAWER_WIDTH,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(overlayOpacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => setIsDrawerOpen(false));
    };

    const toggleDrawer = () => (isDrawerOpen ? closeDrawer() : openDrawer());

    // Handle scroll events for pagination
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / IMAGE_WIDTH);
        setCurrentIndex(index);
    };

    // Handle scroll end to ensure proper pagination
    const handleScrollEnd = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / IMAGE_WIDTH);
        setCurrentIndex(index);
    };

    // Render each image item
    const renderImage = ({ item, index }) => {
        return (
            <View style={styles.imageContainer}>
                <Image 
                    source={item.imageURL}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
        );
    };

    // Render pagination dots
    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {images.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.paginationDot,
                            currentIndex === index && styles.paginationDotActive
                        ]}
                        onPress={() => {
                            if (flatListRef.current) {
                                flatListRef.current.scrollToIndex({ 
                                    index, 
                                    animated: true,
                                    viewPosition: 0.5 
                                });
                                setCurrentIndex(index);
                            }
                        }}
                    />
                ))}
            </View>
        );
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={appColors.primary} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={appColors.primary} />
                </View>

                {/* Header */}
                <Header onMenuPress={toggleDrawer} title={"Create New"} />

                <View style={styles.contentContainer}>
                    <View style={styles.detailInfoContainer}>
                        <View style={styles.sliderContainer}>
                            <FlatList 
                                ref={flatListRef}
                                data={images}
                                renderItem={renderImage}
                                keyExtractor={(item) => item.id}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                snapToInterval={IMAGE_WIDTH}
                                snapToAlignment="center"
                                decelerationRate="fast"
                                onScroll={handleScroll}
                                onMomentumScrollEnd={handleScrollEnd}
                                scrollEventThrottle={16}
                                bounces={false}
                                scrollEnabled={true}
                                nestedScrollEnabled={true}
                            />
                            {renderPagination()}
                        </View>
                        
            
                        <View style={styles.additionalContent}>
                            {/* Add your other components here */}
                        </View>
                    </View>
                </View>
            </View>

            {isDrawerOpen && (
                <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
                    <TouchableOpacity style={styles.overlayTouchable} onPress={closeDrawer} />
                </Animated.View>
            )}

            <CustomDrawer slideAnim={slideAnim} closeDrawer={closeDrawer} /> 
        </>
    );
};

export default ComplainDetails;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    contentContainer: {
        flex: 1,
    },
    circleContainerTop: {
        position: 'absolute',
        right: -width * 0.30,
        top: -height * 0.06,
        zIndex: -1,
    },
    circleContainerBottom: {
        position: 'absolute',
        top: '80%',
        left: -width * 0.6,
        zIndex: -1,
    },
    overlay: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'black',
        zIndex: 2,
    },
    overlayTouchable: {
        flex: 1,
    },
    detailInfoContainer: {
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 20,
    },
    sliderContainer: {
        width: '100%',
        height: IMAGE_HEIGHT + 30, 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    imageContainer: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
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
        backgroundColor: '#ffff',
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
        marginTop: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: appColors.primary,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    additionalContent: {
        flex: 1,
        // Add styles for your additional content
    },
});