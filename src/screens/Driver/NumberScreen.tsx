import React, { useRef, useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import CustomDrawer from '../../components/CustomDrawer';
const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const NumberScreen = () => {
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
                        <CustomButton ButtonTitle='Enter'/>
                    </View>
                </View>
            </View>

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
