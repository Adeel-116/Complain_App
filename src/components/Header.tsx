import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import appColors from '../constants/color';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

interface HeaderProps {
  onMenuPress: () => void;
}

const Header = ({ onMenuPress }: HeaderProps) => {
  const iconSize = width * 0.06;
  const boxSize = width * 0.1;

  return (
    <View style={styles.innerContainer}>
      {/* Left - Icon Box */}
      <TouchableOpacity onPress={onMenuPress} style={[styles.iconBox, { width: boxSize, height: boxSize }]}>
        <Icon name="menu" size={iconSize} color="#fafafa" />
      </TouchableOpacity>

      {/* Center - Title */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Right - Profile Image */}
      <Image
        source={require('../assests/images/profile-picture3.jpg')}
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
    marginTop: height * 0.01,
  },
  iconBox: {
    borderRadius: 10,
    backgroundColor: appColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  profileImage: {
    resizeMode: 'cover',
  },
});
