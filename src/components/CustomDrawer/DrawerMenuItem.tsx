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
import appFonts from '../../constants/font';
import appColors from '../../constants/color';
interface DrawerMenuItemProps {
  backgroundColor: string;
  text: string;
  iconImage: ImageSourcePropType;
  dropdown?: boolean;
  navigation?:any
  closeDrawer?: () => void;
}

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  backgroundColor,
  text,
  iconImage,
  dropdown = false,
  navigation
}) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    if (dropdown) {
      setExpanded(!expanded);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.8}>
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
          <TouchableOpacity onPress={() => navigation.navigate("CreateNew")}>
            <Text style={styles.option}>Create</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity onPress={() => navigation.navigate("VehicleInfoScreen")}>
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
    position: 'relative',
  },
  menuItem: {
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    marginBottom: 18,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
     fontFamily: appFonts.outfit_medium,
  },
  dropdownIcon: {
    marginLeft: 8,
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,

  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  listItems: {
    position: 'absolute',
    width: '100%',
    top: '80%',
    backgroundColor: appColors.primary,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    zIndex: 10,
    gap: 8,
  },
  option: {
    fontSize: 15,
    color: '#fafafa',
    textAlign: 'left',
    fontFamily: appFonts.outfit_medium,
  },
  line: {
    height: 1,
    backgroundColor: '#FFFFFF66',
  },
});
