import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

const CustomTextArea = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        placeholderTextColor="#999"
        multiline
        numberOfLines={4}
        style={styles.textArea}
        textAlignVertical="top" 
      />
    </View>
  );
};

export default CustomTextArea;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    fontSize: 16,
    color: '#000',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 120,
  },
});
