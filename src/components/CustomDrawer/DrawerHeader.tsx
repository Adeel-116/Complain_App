import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import appFonts from '../../constants/font';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../context/AuthContext';
const { width, height } = Dimensions.get('window');

const DrawerHeader = () => {
  const { role } = useAuth();

  const data = {
    nameText: role === 'SuperVisor'? 'David John' : role === 'Driver' ? 'Sam Jack' : 'Unknown',
     roleText: role === 'SuperVisor'? 'SuperVisor' : role === 'Driver' ? 'Driver' : 'Unknown',
  };

  return (
    <LinearGradient
      colors={['#116770', '#0A3B40']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.drawerHeaderContainer}
    >
      <View style={styles.contentContainer}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/images/profile-picture3.jpg')}
            style={styles.profileImage}
          />

          <View style={styles.profileTextContainer}>
            <Text style={styles.nameText}>{data.nameText}</Text>
            <Text style={styles.roleText}>{data.roleText}</Text>
            <View style={styles.locationContainer}>
              <Icon name="location-on" size={16} color="#fafafa" />
              <Text style={styles.locationText} numberOfLines={2}>
                123 Maple St, Toronto, ON M5H 2N2, Canada
              </Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  drawerHeaderContainer: {
    width: '100%',
    height: height * 0.2999,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 80,
    overflow: 'hidden', // ✅ Important for radius effect on gradient
  },
  contentContainer: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 20,
    alignItems: 'flex-start',
  },
  profileInfo: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  profileImage: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.16) / 2,
    resizeMode: 'cover',
    borderWidth: 2.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  profileTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: width * 0.05,
    color: '#ffffff',
    fontFamily: appFonts.bold,
    letterSpacing: 0.3,
  },
  roleText: {
    fontSize: width * 0.04,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: appFonts.semiBold,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingRight: 10,
  },
  locationText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: width * 0.03,
    fontFamily: appFonts.semiBold,
    lineHeight: 18,
    flex: 1,
  },
});
