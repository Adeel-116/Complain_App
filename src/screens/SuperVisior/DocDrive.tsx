import React, {  useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
const { width, height } = Dimensions.get('window');

const DocDrive = ({navigation}) => {


    const options = [
        {label: "Rejected", color: "#FF4f4f"},
        {label: "Inprogress", color: "#007BFF"},
        {label: "Transfer", color: "#4a4a4a"},
        {label: "Completed", color: "#0A3B40"},
    ]    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    return (
        <>
            <View style={styles.container}>
                {/* Background Circles */}
                <View style={styles.circleContainerTop}>
                    <Circle size={width * 0.6} color={appColors.primary} />
                </View>
                <View style={styles.circleContainerBottom}>
                    <Circle size={width * 0.8} color={appColors.primary} />
                </View>

                {/* Header */}
                <Header
                    onMenuPress={toggleDrawer}
                    title={"Complains"}
                    titleColor={"#fff"}
                    iconBgColor={'#fff'}
                    iconColor={appColors.primary}
                />

             

                <View style={styles.innerContainer}>
                    
                </View>




               
            </View>

            <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation}/>
        
          
        </>
    );
};

export default DocDrive;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    innerContainer:{
        width: '100%',
        backgroundColor: "yellow"
    }
    

});
