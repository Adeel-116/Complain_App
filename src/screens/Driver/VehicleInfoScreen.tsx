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
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import CustomButton from '../../components/CustomButton';
import CustomDropdown from '../../components/CustomDropdown';
import CustomTextArea from '../../components/CustomTextArea';
import appFonts from '../../constants/font';

const { width, height } = Dimensions.get('window');

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
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const renderCard = ({ item }: any) => (
        <View style={styles.card}>
            <Text style={styles.cardLabel}>{item.label}</Text>
            <Image source={item.icon} style={styles.iconImage} />
            <Text style={styles.cardValue}>{item.value}</Text>
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                {/* Decorative Circles */}
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={'white'} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={'white'} />
                </View>

                <ScrollView>
                <Header
                    onMenuPress={toggleDrawer}
                    title="Vehicle Information"
                    titleColor="#000"
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
                        contentContainerStyle={{ paddingBottom: 10 }}
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
                <View style={{ paddingHorizontal: 20, marginTop: 15, marginBottom: 50 }}>
                    <CustomButton ButtonTitle='Submit' />
                </View>
                </ScrollView>

            </View>

      <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} />
            
      
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
        marginTop: 30,
        paddingHorizontal: 20,
        // backgroundColor: 'yellow',
    },
    cardRow: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        width: (width - 50) / 2,
        borderRadius: 12,
        borderWidth: 2,
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
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },
    cardLabel: {
        fontSize: 14,
        fontFamily: appFonts.outfit_semibold,
        color: '#333',
        textAlign: 'center',
    },
    cardValue: {
        fontSize: 13,
        color: '#333',
        textAlign: 'center',
        fontFamily: appFonts.outfit_semibold,
    },
 
});

