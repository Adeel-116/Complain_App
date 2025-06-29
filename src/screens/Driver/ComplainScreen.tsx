import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
    ScrollView,
    Text,
    Image,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

// Sample complaint data
const complaintsData = [
    {
        id: 1,
        complainNo: 'Complain No 231',
        image: require('../../assests/images/truckImage.png'),
        ownerName: 'Ronald Wilfred',
        chassisNumber: '24883722',
        vehicleNumber: 'ENG - 204',
        modelYear: '2022',
        status: 'In Progress'
    },
    {
        id: 2,
        complainNo: 'Complain No 232',
        image: require('../../assests/images/truckImage.png'),
        ownerName: 'John Smith',
        chassisNumber: '24883723',
        vehicleNumber: 'ENG - 205',
        modelYear: '2023',
        status: 'Completed'
    },
    {
        id: 3,
        complainNo: 'Complain No 233',
        image: require('../../assests/images/truckImage.png'),
        ownerName: 'Mike Johnson',
        chassisNumber: '24883724',
        vehicleNumber: 'ENG - 206',
        modelYear: '2021',
        status: 'Pending'
    }
];

const ComplaintCard = ({ item }:any) => {
    return (
        <>
         <Text style={styles.topText}>Complain No 231</Text>
        <View style={styles.card}>

            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <Icon name='arrow-up-right' size={40} color={'white'} />
                </View>
            </View>

            {/* Vehicle Image */}
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.vehicleImage} />
            </View>

            {/* Vehicle Details */}
            <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Owner Name:</Text>
                    <Text style={styles.detailValue}>{item.ownerName}</Text>
                </View>
                
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Chassis Number:</Text>
                    <Text style={styles.detailValue}>{item.chassisNumber}</Text>
                </View>
                
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Vehicle Number:</Text>
                    <Text style={styles.detailValue}>{item.vehicleNumber}</Text>
                </View>
                
                <View style={styles.detailRowLast}>
                    <Text style={styles.detailLabel}>Model Year:</Text>
                    <Text style={styles.detailValue}>{item.modelYear}</Text>
                </View>
            </View>

            {/* Status Badge */}
            <View style={styles.statusContainer}>
                <View style={[
                    styles.statusBadge, 
                    { backgroundColor: getStatusColor(item.status) }
                ]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
            </View>
        </View>
    </>
    );
};

const getStatusColor = (status:any) => {
    switch (status.toLowerCase()) {
        case 'in progress':
            return '#2D7A7A';
        case 'completed':
            return '#4CAF50';
        case 'pending':
            return '#FF9800';
        default:
            return '#2D7A7A';
    }
};

const ComplainScreen = () => {
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

    return (
        <>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={appColors.primary} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={appColors.primary} />
                </View>

                {/* Header */}
                <Header
                    onMenuPress={toggleDrawer}
                    title="Create New"
                    titleColor="#000"
                    iconBgColor={appColors.primary}
                    iconColor={'#ffff'}
                />

                <View style={styles.complainContainer}>
                    {complaintsData.map((item) => (
                        <ComplaintCard key={item.id} item={item} />
                    ))}
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

export default ComplainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    circleContainerTop: {
        position: 'absolute',
        right: -width * 0.3,
        top: -height * 0.06,
    },
    circleContainerBottom: {
        position: 'absolute',
        top: '240%',
        left: -width * 0.6,
    },
    complainContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 20,
        position: 'relative',
        borderTopRightRadius: 90,
    },
    topText:{
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: '#000',
        fontWeight: 600,

    },
    cardHeader: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingHorizontal: 16,
        // paddingVertical: 12,
        // backgroundColor: '#FFFFFF',
    },
    complainNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
    },
    arrowButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#2D7A7A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '85%',
        height: 160,
        backgroundColor: '#F5F5F5',
    },
    vehicleImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    detailsContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'center',
    },
    detailRowLast: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 15,
        color: '#0A3B40',
        fontWeight: '600',
    },
    detailValue: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '500',
        flex: 1,
        paddingLeft: 7,
    },
    statusContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        alignItems: 'flex-end',
    },
    iconContainer:{
        width: 90,
        height: 90,
        // backgroundColor: 'yellow',
        position: 'absolute',
        right: -30,
        zIndex: 4,
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.primary,
    },
    statusBadge: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
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