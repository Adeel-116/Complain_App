// components/CardItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';
import appColors from '../constants/color';

type CardItemProps = {
    iconImage: ImageSourcePropType;
    label: string;
    onPress: () => void;
};

const CardItem = ({ iconImage, label, onPress }: CardItemProps) => {
    return (
        <Pressable onPress={onPress} style={styles.cardContent}>
            <View style={styles.iconContainer}>
                <Image source={iconImage} style={styles.icon} />
            </View>
            <Text style={styles.fontStyle}>{label}</Text>
        </Pressable>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    cardContent: {
        width: '75%',
        height: '30%',
        backgroundColor: appColors.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
        
},
    iconContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 15,
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
});
