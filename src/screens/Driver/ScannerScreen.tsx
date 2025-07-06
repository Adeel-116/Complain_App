import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';

const ScannerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.viewfinderContainer}>
          <View style={styles.viewfinder}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />

            {/* Document/Card Area */}
            <View style={styles.documentArea}>
              <View style={styles.documentCard}>
                <View style={styles.cardTopStripe} />
                <View style={styles.cardBottomStripe} />
              </View>
            </View>

            {/* Bottom Left Corner */}
            <View style={[styles.corner, styles.bottomLeft]} />
            {/* Bottom Right Corner */}
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
        </View>

        <View style={styles.bottomIndicator} />
      </View>

      {/* Details Button */}
      <View style={styles.buttonContainer}>
        <CustomButton ButtonTitle='Details' />
      </View>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  viewfinderContainer: {
    width: '100%',
    aspectRatio: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewfinder: {
    width: '85%',
    height: '70%',
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 15,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 15,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 15,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 15,
  },
  documentArea: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    right: '10%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentCard: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cardTopStripe: {
    height: 15,
    backgroundColor: 'rgba(180, 180, 180, 0.6)',
    marginHorizontal: 8,
    borderRadius: 2,
  },
  cardBottomStripe: {
    height: 25,
    backgroundColor: 'rgba(100, 100, 100, 0.8)',
    marginHorizontal: 8,
    borderRadius: 2,
  },
  bottomIndicator: {
    width: 50,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    marginTop: 60,
  },
  buttonContainer: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  detailsButton: {
    backgroundColor: '#2D7A7A',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScannerScreen;