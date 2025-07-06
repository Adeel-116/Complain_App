import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import appFonts from '../constants/font';

const options = [
  'Engine Tuning',
  'Brake Failure',
  'Oil Change',
  'Battery Low',
  'Tyre Pressure',
  'Engine Service',
  'AC Cooling Issue',
  'Fuel Leakage',
  'Clutch Replacement',
  'Suspension Repair',
];

const CustomDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Categories');

  const toggleDropdown = () => {
    setShowOptions(!showOptions);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDropdown} style={styles.dropdown}>
        <Text style={styles.selectedText}>{selectedOption}</Text>
        <AntDesign name={showOptions ? 'up' : 'down'} size={18} color="#000" />
      </Pressable>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={true}
            style={styles.scrollView}
          >
            {options.map((item, index) => (
              <Pressable
                key={index}
                style={[
                  styles.optionItem,

                ]}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
    zIndex: 1000,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedText: {
    color: '#333',
    fontSize: 16,
    fontFamily: appFonts.outfit_medium,
    flex: 1,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 6,
    maxHeight: 200,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
 

  },
  scrollView: {
//    backgroundColor: 'pink'
  },
  optionItem: {
  // backgroundColor: 'blue',
  paddingVertical: 15,
  marginHorizontal: 10,
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#D2D3D0',
  },
  optionText: {
    fontSize: 15,
    color: '#000',
   fontFamily: appFonts.outfit_medium,
    textAlignVertical: 'center',
    lineHeight: 20,
  },
});