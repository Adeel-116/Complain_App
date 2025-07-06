import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import DrawerHeader from './DrawerHeader';
import DrawerMenu from './DrawerMenu';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.72;

const CustomDrawer = ({
  isOpen,
  closeDrawer,
  navigation,
}) => {
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
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
    } else {
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
      ]).start();
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay (Always Rendered, but animated) */}
      <Animated.View
        pointerEvents={isOpen ? 'auto' : 'none'}
        style={[styles.overlay, { opacity: overlayOpacity }]}
      >
        <TouchableOpacity style={styles.overlayTouchable} onPress={closeDrawer} />
      </Animated.View>

      {/* Drawer (Always Rendered, animated slide) */}
      <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
        <DrawerHeader />
        <View style={styles.menuSection}>
          <DrawerMenu closeDrawer={closeDrawer} navigation={navigation}/>
        </View>
      </Animated.View>
    </>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
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
  menuSection: {
    flex: 1,
    width: '85%',
    paddingTop: 20,
  },
});
