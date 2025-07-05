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
import CustomDrawer from '../../components/CustomDrawer';
import CardItem from '../../components/CardItem';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const CreateNew = () => {
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

            <View style={styles.circleContainerTop}>
                <Circle size={width * 0.6} color={appColors.primary} />
            </View>
            <View style={styles.circleContainerBottom}>
                <Circle size={width * 0.8} color={appColors.primary} />
            </View>

            {/* Header */}
            <Header onMenuPress={toggleDrawer} title={"Create New"} />

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

        {isDrawerOpen && (
                <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
                    <TouchableOpacity style={styles.overlayTouchable} onPress={closeDrawer} />
                </Animated.View>
            )}

          
            <CustomDrawer slideAnim={slideAnim} closeDrawer={closeDrawer} /> 
            </>
    );
};

export default CreateNew;

const styles = StyleSheet.create({
    container: { flex: 1 },
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
