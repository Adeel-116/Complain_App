import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import appColors from '../constants/color';

const { width, height } = Dimensions.get('window');

interface Props {
  onClose: () => void;
}

const CustomDrawer: React.FC<Props> = ({ onClose }) => {
  const drawerWidth = width * 0.75; // 75% of screen width
  const slideAnim = useRef(new Animated.Value(-drawerWidth)).current;

  // Animate in
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  // Animate out
  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: -drawerWidth,
      duration: 200,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  return (
    <View style={styles.overlay}>
      {/* Tap on dark area to close */}
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      {/* Drawer */}
      <Animated.View style={[styles.drawer, { width: drawerWidth, transform: [{ translateX: slideAnim }] }]}>
        <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
          <Icon name="x" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: '#00000088', // dark transparent background
  },
  drawer: {
    height: '100%',
    backgroundColor: appColors.primary,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomColor: '#ffffff33',
    borderBottomWidth: 1,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
});
