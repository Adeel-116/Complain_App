import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Text, 
    ScrollView
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';

const { width, height } = Dimensions.get('window');

const IMAGE_WIDTH = width * 0.77;
const IMAGE_HEIGHT = height * 0.2444;
const CARD_WIDTH = width * 0.38;

// Sample data
const MOCK_IMAGES = [
    { id: '1', imageURL: require("../../assets/images/truckImage.png") },
    { id: '2', imageURL: require("../../assets/images/truckImage.png") },
    { id: '3', imageURL: require("../../assets/images/truckImage.png") },
];

const MOCK_COMPLAIN_INFO = [
    {
        id: '1',
        heading: 'Driver Name',
        iconImage: require('../../assets/images/driver-icon.png'),
        text: 'John Carter'
    },
    {
        id: '2',
        heading: 'Contact Number',
        iconImage: require('../../assets/images/phone-number.png'),
        text: '+1 555-9876'
    },
    {
        id: '3',
        heading: 'Vehicle No',
        iconImage: require('../../assets/images/vehicle.png'),
        text: 'ABC-1234'
    },
    {
        id: '4',
        heading: 'Date',
        iconImage: require('../../assets/images/date.png'),
        text: '2024-01-15'
    },
    {
        id: '5',
        heading: 'License No',
        iconImage: require('../../assets/images/license-number.png'),
        text: 'DLV-123456'
    },
    {
        id: '6',
        heading: 'Chassis No',
        iconImage: require('../../assets/images/chassis-no2.png'),
        text: 'RMX1234567890'
    },
];

const ComplainDetails = ({ 
    images = MOCK_IMAGES, 
    complainInfo = MOCK_COMPLAIN_INFO,
    complainNumber = "231"
}) => {
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

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Image 
                source={item.iconImage} 
                style={styles.icon} 
                resizeMode="contain" 
            />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.circleContainerTop}>
                <Circle size={width * 0.6} color={appColors.primary} />
            </View>
            <View style={styles.circleContainerBottom}>
                <Circle size={width * 0.8} color={appColors.primary} />
            </View>

            <ScrollView>
                <Header onMenuPress={() => ""} title="Complain Details" />

                <View style={styles.detailInfoContainer}>
                    {/* Image Slider */}
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
                        
                        {/* Pagination Dots */}
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
                    </View>

                    {/* Complain Information */}
                    {/* <View style={styles.additionalContent}>
                        <Text style={styles.complainTitle}>
                            Complain No {complainNumber}
                        </Text>

                        <View style={styles.cardContainer}>
                            <FlatList
                                data={complainInfo}
                                renderItem={renderCard}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                                contentContainerStyle={styles.cardListContent}
                                showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                            />
                        </View>

                        <View>
                            <Text style={styles.complainTitle}>Complain Description</Text>
                            <Text style={styles.descriptionText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorem magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </View>
                    </View> */}
                </View>
            </ScrollView>
        </View>
    );
};

export default ComplainDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    circleContainerTop: {
        position: 'absolute',
        right: -width * 0.3,
        top: -height * 0.06,
    },
    circleContainerBottom: {
        position: 'absolute',
        top: '80%',
        left: -width * 0.6,
    },
    detailInfoContainer: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 20,
    },
    sliderContainer: {
        width: '100%',
        height: IMAGE_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: 'blue'
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
        backgroundColor: 'yellow',
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
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    additionalContent: {
        flex: 1,
    },
    complainTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    cardContainer: {
        flex: 1,
        marginBottom: 20,
    },
    cardListContent: {
        justifyContent: 'center',
    },
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        margin: 8,
        alignItems: 'center',
        shadowRadius: 5,
        borderWidth: 2,
        borderColor: '#E5E5E5',
    },
    heading: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 8,
        color: '#000',
        textAlign: 'center',
    },
    icon: {
        width: 35,
        height: 35,
        marginBottom: 6,
    },
    text: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
        textAlign: 'justify',
        paddingHorizontal: 10,
    },
});