import React, {  useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TextInput,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
const { width, height } = Dimensions.get('window');

const NumberScreen = ({navigation}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    return (
        <>
            <View style={styles.container}>
                {/* Background Circles */}
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={'white'} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={'white'} />
                </View>

                {/* Header */}
                <Header
                    onMenuPress={toggleDrawer}
                    title={"Create New"}
                    titleColor={"#fff"}
                    iconBgColor={'#fff'}
                    iconColor={appColors.primary}
                />

                {/* Centered Input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="ABC 123"
                        placeholderTextColor="#666"
                    />


                    <View style={styles.buttonContainer}>
                        <CustomButton ButtonTitle='Enter' onPress={()=> navigation.navigate("VehicleInfoScreen")}/>
                    </View>
                </View>
            </View>

            <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation}/>
        
          
        </>
    );
};

export default NumberScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.primary,
    },
    circleContainerTop: {
        position: 'absolute',
        right: -width * 0.30,
        top: -height * 0.06,
    },
    circleContainerBottom: {
        position: 'absolute',
        top: '80%',
        left: -width * 0.6,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '85%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 25,
        fontSize: 15,
        color: '#000',
        elevation: 3,
    },
    buttonContainer:{
         width: '85%',
         marginTop: 30,
    },
});
