import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import appFonts from '../constants/font';

interface CustomDropdownProps {
  options?: { optionLabel: string; optionBgColor: string; fontColor: string }[];
  defaultValue?: string;
  onSelect?: (value: string) => void;
}

const defaultOptions = [
  { optionLabel: 'Engine Tuning', optionBgColor: '#fff', fontColor: '#000000' },
  { optionLabel: 'Brake Failure', optionBgColor: '#fff', fontColor: '#000000' },
  { optionLabel: 'Oil Change', optionBgColor: '#fff', fontColor: '#000000' },
  { optionLabel: 'Battery Low', optionBgColor: '#fff', fontColor: '#000000' },
  { optionLabel: 'Tyre Pressure', optionBgColor: '#fff', fontColor: '#000000' },
  {
    optionLabel: 'Engine Service',
    optionBgColor: '#fff',
    fontColor: '#000000',
  },
  {
    optionLabel: 'AC Cooling Issue',
    optionBgColor: '#fff',
    fontColor: '#000000',
  },
  { optionLabel: 'Fuel Leakage', optionBgColor: '#fff', fontColor: '#000000' },
  {
    optionLabel: 'Clutch Replacement',
    optionBgColor: '#fff',
    fontColor: '#000000',
  },
];

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options = defaultOptions,
  defaultValue = 'Categories',
  onSelect,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleDropdown = () => {
    setShowOptions(!showOptions);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    onSelect?.(option);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={toggleDropdown}
        style={[
          styles.dropdown,
          {
            backgroundColor: '#ffff',
            borderWidth: options ? 1 : 0,
            borderColor: '#D2D3D0',
          },
        ]}
      >
        <Text style={styles.selectedText}>{selectedOption}</Text>
        <AntDesign name={showOptions ? 'up' : 'down'} size={18} color="#000" />
      </Pressable>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.length > 4 ? (
            <ScrollView
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps="handled"
            >
              {options.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.optionItem,
                    { backgroundColor: item.optionBgColor },
                  ]}
                  onPress={() => handleSelect(item.optionLabel)}
                >
                  <Text style={[styles.optionText, { color: item.fontColor }]}>
                    {item.optionLabel}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          ) : (
            options.map((item, index) => (
              <Pressable
                key={index}
                style={[
                  styles.optionItem,
                  { backgroundColor: item.optionBgColor },
                ]}
                onPress={() => handleSelect(item.optionLabel)}
              >
                <Text style={[styles.optionText, { color: item.fontColor }]}>
                  {item.optionLabel}
                </Text>
              </Pressable>
            ))
          )}
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
    paddingVertical: 12,
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
    width: '100%',
    borderRadius: 12,
    marginTop: 6,
    maxHeight: 200,
    elevation: 3,
    shadowColor: '#000',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 4,

  },

  optionItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D3D0',
  },
  optionText: {
    fontSize: 15,
    fontFamily: appFonts.outfit_medium,
    lineHeight: 20,
  },
});
