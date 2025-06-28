import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageSourcePropType,
    TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface DrawerMenuItemProps {
    backgroundColor: string;
    text: string;
    iconImage: ImageSourcePropType;
    dropdown?: boolean;
    onPress?: () => void;
}

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
    backgroundColor,
    text,
    iconImage,
    dropdown = false,
    onPress,
}) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => {
        if (dropdown) {
            setExpanded(!expanded);
        }
        onPress && onPress();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
                <View style={[styles.menuItem, { backgroundColor }]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{text}</Text>
                        {dropdown && (
                            <AntIcon
                                name={expanded ? 'caretup' : 'caretdown'}
                                size={13}
                                color="#fff"
                                style={styles.dropdownIcon}
                            />
                        )}
                    </View>

                    <View style={styles.iconWrapper}>
                        <Image source={iconImage} style={styles.icon} />
                    </View>
                </View>
            </TouchableOpacity>

            {expanded && dropdown && (
                <View style={styles.listItems}>
                    <TouchableOpacity onPress={() => console.log('Create Pressed')}>
                        <Text style={styles.option}>Create</Text>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    <TouchableOpacity onPress={() => console.log('List Pressed')}>
                        <Text style={styles.option}>List</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default DrawerMenuItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        position: 'relative',
    },
    menuItem: {
        position: 'relative',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 14,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        overflow: 'hidden',
    },
    textContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdownIcon: {
        marginLeft: 8,
    },
    iconWrapper: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 6,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    listItems: {
        position: 'absolute',
        width: '100%',
        top: '102%',
        backgroundColor: '#094F56',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        zIndex: 10,
        gap: 8, // equal vertical space between children
    },

    option: {
        fontSize: 18,
        color: '#fafafa',
        fontWeight: '700',
        textAlign: 'left',
    },

    line: {
        height: 1,
        backgroundColor: '#FFFFFF66',
        marginHorizontal: 0,
    },
});