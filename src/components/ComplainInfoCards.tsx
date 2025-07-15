import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
    FlatList,
    Text,
} from 'react-native';
import appFonts from '../constants/font';
import appColors from '../constants/color';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 3;

const ComplainInfoCards = ({ complainInfo, complainNumber }) => {
    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Image 
                source={item.iconImage} 
                style={styles.icon} 
                resizeMode="contain" 
            />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.complainTitle}>
                Complain No <Text style={{color: appColors.primary}}>{complainNumber}</Text>
            </Text>

            <View style={styles.historyButton}>
                    <Text>History</Text>
                    
            </View>
            </View>
            

            <View style={styles.cardContainer}>
                <FlatList
                    data={complainInfo}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.cardListContent}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    columnWrapperStyle={styles.cardRow}
                />
            </View>
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
    cardContainer: {
        flex: 1,
        paddingVertical: 14,
    },
    cardListContent: {
        paddingHorizontal: 10,
    },
    cardRow: {
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 7,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E5E5E5'
    },
    heading: {
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 6,
        color: '#000',
        textAlign: 'center',
    },
    icon: {
        width: 26,
        height: 26,
        marginBottom: 4,
    },
    text: {
        fontSize: 11,
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
    },
    historyButton:{

    }
});

export default ComplainInfoCards;