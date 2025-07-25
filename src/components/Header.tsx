import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import appColors from '../constants/color';
import appFonts from '../constants/font';

const { width, height } = Dimensions.get('window');

interface HeaderProps {
  onMenuPress?: () => void;
  onBackPress?: () => void;
  title?: string;
  iconColor?: string;
  titleColor?: string;
  iconBgColor?: string;
  showBackButton?: boolean; // <-- New prop
}

const Header = ({
  onMenuPress,
  onBackPress,
  title = "Default Title",
  iconColor = "#fff",
  titleColor = "#000",
  iconBgColor = appColors.secondary,
  showBackButton = false, 
}: HeaderProps) => {

  const insets = useSafeAreaInsets();
  const iconSize = width * 0.06;
  const boxSize = width * 0.1;

  return (
    <View style={[styles.innerContainer, { marginTop: insets.top }]}>

      <TouchableOpacity
        onPress={showBackButton ? onBackPress : onMenuPress}
        style={[styles.iconBox, { width: boxSize, height: boxSize, backgroundColor: iconBgColor }]}
        activeOpacity={0.8}
      >
        <Icon
          name={showBackButton ? 'arrow-left' : 'menu'}
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      </View>

      {/* Profile Image */}
      <Image
        source={require('../assets/images/profile-picture3.jpg')}
        style={[styles.profileImage, { width: boxSize, height: boxSize, borderRadius: boxSize / 2 }]}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    height: height * 0.08,
  },
  iconBox: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.045,
    fontFamily: appFonts.bold,
  },
  profileImage: {
    resizeMode: 'cover',
  },
});
