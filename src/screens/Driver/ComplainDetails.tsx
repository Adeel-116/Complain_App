import React, {useState}from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import ComplainInfoCards from '../../components/ComplainInfoCards';
import ComplainDescription from '../../components/ComplainDescription';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
const { width, height } = Dimensions.get('window');

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
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);


    return (
        <>
        <View style={styles.container}>
            <View style={styles.circleContainerTop}>
                <Circle size={width * 0.6} color={appColors.primary} />
            </View>

            <ScrollView>
                <Header onMenuPress={() => ""} title="Complain Details" />

                <View style={styles.detailInfoContainer}>
                    <ImageSlider images={images} />
                    
                    <View style={styles.additionalContent}>
                        <ComplainInfoCards 
                            complainInfo={complainInfo} 
                            complainNumber={complainNumber} 
                        />
                        <ComplainDescription />
                    </View>
                </View>
            </ScrollView>
        </View>

         <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />
        </>
    );
};

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
    detailInfoContainer: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 20,
    },
    additionalContent: {
        flex: 1,
        paddingVertical: 10,
    },
});

export default ComplainDetails;