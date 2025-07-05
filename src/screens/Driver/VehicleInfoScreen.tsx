import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer';
import CustomButton from '../../components/CustomButton';
import CustomDropdown from '../../components/CustomDropdown';
import CustomTextArea from '../../components/CustomTextArea';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const vehicleData = [
    { id: '1', label: 'Model Number', value: '2025', icon: require('../../assets/images/model-number.png') },
    { id: '2', label: 'Engine Type', value: 'Hybrid', icon: require('../../assets/images/model-number.png') },
    { id: '3', label: 'Color', value: 'Black', icon: require('../../assets/images/model-number.png') },
    { id: '4', label: 'Registration', value: 'ABC-1234', icon: require('../../assets/images/model-number.png') },
    { id: '5', label: 'Owner', value: 'John Doe', icon: require('../../assets/images/model-number.png') },
    { id: '6', label: 'Chassis No.', value: 'XYZ7890', icon: require('../../assets/images/model-number.png') },
];

const VehicleInfoScreen = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
    const overlayOpacity = useRef(new Animated.Value(0)).current;

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

    const renderCard = ({ item }: any) => (
        <View style={styles.card}>
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Image source={item.icon} style={styles.iconImage} />
            <Text style={styles.cardValue}>{item.value}</Text>
        </View>
    );

    return (
        <>
            <ScrollView style={styles.container}>
                {/* Decorative Circles */}
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={'white'} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={'white'} />
                </View>

                {/* Header */}
                <Header
                    onMenuPress={toggleDrawer}
                    title="Create New"
                    titleColor="#fff"
                    iconBgColor="#fff"
                    iconColor={appColors.primary}
                />

                {/* Vehicle Info Grid */}
                <View style={styles.vehicleInfoContainer}>
                    <FlatList
                        data={vehicleData}
                        renderItem={renderCard}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.cardRow}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, }}>
                    <CustomDropdown />
                </View>
                <View style={{ paddingHorizontal: 20, }}>
                    <CustomTextArea
                        placeholder="Write Discription...."
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 15, }}>
                    <CustomButton ButtonTitle='Add' />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
                    <CustomButton ButtonTitle='Submit' />
                </View>

            </ScrollView>

            {/* Overlay */}
            {isDrawerOpen && (
                <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
                    <TouchableOpacity style={styles.overlayTouchable} onPress={closeDrawer} />
                </Animated.View>
            )}

            {/* Drawer */}
            <CustomDrawer slideAnim={slideAnim} closeDrawer={closeDrawer} />
        </>
    );
};

export default VehicleInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.primary,
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
    vehicleInfoContainer: {
        marginTop: 50,
        paddingHorizontal: 20,
        // backgroundColor: 'yellow',
    },
    cardRow: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        width: (width - 60) / 2,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    iconImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    cardLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    cardValue: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        fontWeight: 500,
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
});

