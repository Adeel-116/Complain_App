import React, { useRef, useState, useCallback, useMemo } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Image,
    FlatList,
    Text, 
    ScrollView
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer';


const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;
const IMAGE_WIDTH = width * 0.8;
const IMAGE_HEIGHT = 210;
const CARD_WIDTH = width * 0.38;

// Sample data - move to separate file in real app
const MOCK_IMAGES = [
    { id: '1', imageURL: require("../../assests/images/truckImage.png") },
    { id: '2', imageURL: require("../../assests/images/truckImage.png") },
    { id: '3', imageURL: require("../../assests/images/truckImage.png") },
];

const MOCK_COMPLAIN_INFO = [
    {
        id: '1',
        heading: 'Driver Name',
        iconImage: require('../../assests/images/driver-icon.png'),
        text: 'John Carter'
    },
    {
        id: '2',
        heading: 'Contact Number',
        iconImage: require('../../assests/images/phone-number.png'),
        text: '+1 555-9876'
    },
    {
        id: '3',
        heading: 'Vehicle No',
        iconImage: require('../../assests/images/vehicle.png'),
        text: 'ABC-1234'
    },
    {
        id: '4',
        heading: 'Date',
        iconImage: require('../../assests/images/date.png'),
        text: '2024-01-15'
    },
    {
        id: '5',
        heading: 'License No',
        iconImage: require('../../assests/images/license-number.png'),
        text: 'DLV-123456'
    },
    {
        id: '6',
        heading: 'Chassis No',
        iconImage: require('../../assests/images/chassis-no2.png'),
        text: 'RMX1234567890'
    },
];

// Extracted components for better performance
const ImageSliderItem = React.memo(({ item }) => (
    <View style={styles.imageContainer}>
        <Image
            source={item.imageURL}
            style={styles.image}
            resizeMode="cover"
        />
    </View>
));

const ComplainInfoCard = React.memo(({ item }) => (
    <View style={styles.card}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Image 
            source={item.iconImage} 
            style={styles.icon} 
            resizeMode="contain" 
        />
        <Text style={styles.text}>{item.text}</Text>
    </View>
));

const PaginationDots = React.memo(({ images, currentIndex, onDotPress }) => (
    <View style={styles.paginationContainer}>
        {images.map((_, index) => (
            <TouchableOpacity
                key={index}
                style={[
                    styles.paginationDot,
                    currentIndex === index && styles.paginationDotActive
                ]}
                onPress={() => onDotPress(index)}
                activeOpacity={0.7}
            />
        ))}
    </View>
));

const ComplainDetails = ({ 
    images = MOCK_IMAGES, 
    complainInfo = MOCK_COMPLAIN_INFO,
    complainNumber = "231"
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
    const overlayOpacity = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);

    // Memoized animations
    const drawerAnimations = useMemo(() => ({
        open: () => Animated.parallel([
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
        ]),
        close: () => Animated.parallel([
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
        ])
    }), [slideAnim, overlayOpacity]);

    // Optimized drawer functions
    const openDrawer = useCallback(() => {
        setIsDrawerOpen(true);
        drawerAnimations.open().start();
    }, [drawerAnimations]);

    const closeDrawer = useCallback(() => {
        drawerAnimations.close().start(() => setIsDrawerOpen(false));
    }, [drawerAnimations]);

    const toggleDrawer = useCallback(() => {
        isDrawerOpen ? closeDrawer() : openDrawer();
    }, [isDrawerOpen, openDrawer, closeDrawer]);

    // Optimized scroll handlers
    const handleScroll = useCallback((event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / IMAGE_WIDTH);
        setCurrentIndex(index);
    }, []);

    const handleScrollEnd = useCallback((event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / IMAGE_WIDTH);
        setCurrentIndex(index);
    }, []);

    // Pagination dot press handler
    const handleDotPress = useCallback((index) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5
        });
        setCurrentIndex(index);
    }, []);

    // Memoized render functions
    const renderImage = useCallback(({ item }) => (
        <ImageSliderItem item={item} />
    ), []);

    const renderCard = useCallback(({ item }) => (
        <ComplainInfoCard item={item} />
    ), []);

    const keyExtractorImages = useCallback((item) => item.id, []);
    const keyExtractorCards = useCallback((item) => item.id, []);

    return (
        <>
            <ScrollView style={styles.container}>
                {/* Background Circles */}
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={appColors.primary} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={appColors.primary} />
                </View>

                {/* Header */}
                <Header onMenuPress={toggleDrawer} title="Complain Details" />

                <View style={styles.contentContainer}>
                    <View style={styles.detailInfoContainer}>
                        {/* Image Slider */}
                        <View style={styles.sliderContainer}>
                            <FlatList
                                ref={flatListRef}
                                data={images}
                                renderItem={renderImage}
                                keyExtractor={keyExtractorImages}
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
                                removeClippedSubviews={true}
                                maxToRenderPerBatch={3}
                                windowSize={5}
                            />
                            <PaginationDots 
                                images={images}
                                currentIndex={currentIndex}
                                onDotPress={handleDotPress}
                            />
                        </View>

                        {/* Complain Information */}
                        <View style={styles.additionalContent}>
                            <Text style={styles.complainTitle}>
                                Complain No {complainNumber}
                            </Text>

                            <View style={styles.cardContainer}>
                                <FlatList
                                    data={complainInfo}
                                    renderItem={renderCard}
                                    keyExtractor={keyExtractorCards}
                                    numColumns={2}
                                    contentContainerStyle={styles.cardListContent}
                                    showsVerticalScrollIndicator={false}
                                    maxToRenderPerBatch={4}
                                    windowSize={7}
                                />
                            </View>


                            <View>
                                <Text style={styles.complainTitle}>Complain Discription</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolorem agna aliqua. Ut enim ad minim veniam, quis nostrudexe rc citation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                            </View>



                            
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Drawer Overlay */}
            {isDrawerOpen && (
                <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
                    <TouchableOpacity 
                        style={styles.overlayTouchable} 
                        onPress={closeDrawer}
                        activeOpacity={1}
                    />
                </Animated.View>
            )}

            {/* Custom Drawer */}
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
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 20,
    },
    sliderContainer: {
        width: '100%',
        height: IMAGE_HEIGHT + 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
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
        // backgroundColor: 'yellow'
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
});