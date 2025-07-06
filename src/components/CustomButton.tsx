// components/CustomButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import appFonts from '../constants/font';

interface CustomButtonProps {
  ButtonTitle: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ ButtonTitle }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{ButtonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#07444A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#6A8F92'
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontFamily: appFonts.bold,
  },
});
