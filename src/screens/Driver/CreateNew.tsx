import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';

const { width, height } = Dimensions.get('window');

const CreateNew = () => {

    // 🔧 Add this toggleDrawer function (dummy example)
    const toggleDrawer = () => {
        console.log('Drawer toggled');
        // yahan apna drawer open/close logic lagao
    };

    return (
        <View style={styles.container}>
            {/* Top Circle */}
            <View style={styles.circleContainerTop}>
                <Circle size={width * 0.6} color={appColors.primary} />
            </View>

            {/* Bottom Circle */}
            <View style={styles.circleContainerBottom}>
                <Circle size={width * 0.8} color={appColors.primary} />
            </View>

            {/* Header */}
            <Header onMenuPress={toggleDrawer} title={"Create New"} />

            {/* Cards */}
            <View style={styles.cardContainer}>
                <CardItem
                    iconImage={require("../../assets/images/scan.png")}
                    label="Scan"
                    onPress={() => {
                        console.log('Scan pressed');
                    }}
                />

                <CardItem
                    iconImage={require("../../assets/images/license-plate.png")}
                    label="Number"
                    onPress={() => {
                        console.log('Upload pressed');
                    }}
                />
            </View>
        </View>
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
    cardContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 50,
    },
});
