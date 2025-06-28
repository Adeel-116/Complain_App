import React from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import appColors from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const CustomDrawer = ({
  slideAnim,
  closeDrawer,
}: {
  slideAnim: Animated.Value;
  closeDrawer: () => void;
}) => {
  return (
    <Animated.View
      style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={styles.drawerHeaderContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../assests/images/profile-picture3.jpg')}
              style={styles.profileImage}
            />
            
            <View style={styles.profileTextContainer}>
              <Text style={styles.nameText}>Sam Jack</Text>
              <Text style={styles.roleText}>Driver</Text>
              
              <View style={styles.locationContainer}>
                <Icon name="location-on" size={16} color="#fafafa" />
                <Text style={styles.locationText} numberOfLines={2}>
                  123 Maple St, Toronto, ON M5H 2N2, Canada
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#ffffff',
    zIndex: 3,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  drawerHeaderContainer: {
    width: '100%',
    height: height * 0.32,
    backgroundColor: appColors.primary,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 80,
    position: 'relative',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    alignItems: 'flex-start',
  },
  profileInfo: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  profileImage: {
    width: width * 0.16,
    height: width * 0.16,
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
    fontSize: width * 0.062,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  roleText: {
    fontSize: width * 0.053,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingRight: 10,
  },
  locationText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: width * 0.029,
    fontWeight: '400',
    lineHeight: 18,
    flex: 1,
  },
});