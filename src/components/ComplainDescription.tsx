import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import appFonts from '../constants/font';

const ComplainDescription = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.complainTitle}>Complain Description</Text>
            <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolorem agna aliqua. Ut enim ad minim veniam, quis nostrudexe rc citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

            <View style={styles.complainIssue}>
                <Text style={[styles.complainTitle, {fontSize: 16, }]}>Engine OverHeating</Text>
            </View>

            <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolorem agna aliqua. Ut enim ad minim veniam, quis nostrudexe rc citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>

            <View style={styles.complainIssue}>
                <Text style={[styles.complainTitle, {fontSize: 16, }]}>Brake Fail</Text>
            </View>

            <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolorem agna aliqua. Ut enim ad minim veniam, quis nostrudexe rc citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    complainTitle: {
        fontSize: 20,
        fontFamily: appFonts.outfit_semibold,
        color: '#333',
        textAlign: 'left',
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: appFonts.outfit_medium,
        color: '#666',
        lineHeight: 22,
        textAlign: 'justify',
        paddingVertical: 10,
    },
    complainIssue: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#D2D3D0',
        borderRadius: 30,
    }
});

export default ComplainDescription;