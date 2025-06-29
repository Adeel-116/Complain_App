import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

const SuccessPopup = ({ visible, onClose, title = "Submit Successful" }:any) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.container}>
          <Pressable style={styles.popup} onPress={() => {}}>
            {/* Success Icon */}
            <View style={styles.iconContainer}>
              <AntDesign name="check" size={32} color="#FFFFFF" />
            </View>
            
            {/* Success Text */}
            <Text style={styles.successText}>{title}</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

// Example usage component
const ExampleUsage = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.exampleContainer}>
      <Pressable style={styles.triggerButton} onPress={handleShowPopup}>
        <Text style={styles.triggerButtonText}>Show Success Popup</Text>
      </Pressable>

      <SuccessPopup
        visible={showPopup}
        onClose={handleClosePopup}
        title="Submit Successful"
      />
    </View>
  );
};

export default SuccessPopup;
export { ExampleUsage };

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  successText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  // Example usage styles
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