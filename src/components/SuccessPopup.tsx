import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import appFonts from '../constants/font';

const { width, height } = Dimensions.get('window');

const SuccessPopup = ({ visible, onClose, title = "Submit Successful" }: any) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent={true} // Add this
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.popup} onPress={() => {}}>
          <View style={styles.iconContainer}>
            <AntDesign name="check" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.successText}>{title}</Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

// Example usage
const ExampleUsage = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <View style={styles.exampleContainer}>
        <Pressable style={styles.triggerButton} onPress={() => setShowPopup(true)}>
          <Text style={styles.triggerButtonText}>Show Success Popup</Text>
        </Pressable>

        <SuccessPopup
          visible={showPopup}
          onClose={() => setShowPopup(false)}
          title="Submit Successful"
        />
      </View>
    </>
  );
};

export default SuccessPopup;
export { ExampleUsage };

const styles = StyleSheet.create({
  overlay: {
    flex: 1, // Changed from position absolute to flex: 1
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    minWidth: 280,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2D7A7A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#2D7A7A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  successText: {
    fontSize: 18,
    fontFamily: appFonts.outfit_semibold,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  exampleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  triggerButton: {
    backgroundColor: '#2D7A7A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  triggerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});