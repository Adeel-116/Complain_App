import React, { useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';

const { width, height } = Dimensions.get('window');

const CreateNew = ({navigation}) => {
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
                <Header onMenuPress={toggleDrawer} title={"Create New"} />

                {/* ✅ Cards vertically centered in remaining space */}
                <View style={styles.cardWrapper}>
                    <CardItem
                        iconImage={require("../../assets/images/scan.png")}
                        label="Scan Now"
                        onPress={() => {
                            navigation.navigate("ScannerScreen")
                        }}
                    />

                    <CardItem
                        iconImage={require("../../assets/images/license-plate.png")}
                        label="Number"
                        onPress={() => {
                            navigation.navigate("NumberScreen")
                        }}
                    />
                </View>
            </View>

            {/* Custom Drawer */}
            <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation}/>
        </>
    );
};

export default CreateNew;

const styles = StyleSheet.create({
    container: {
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
    cardWrapper: {
        flex: 1,                  
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 15,
    },
});
