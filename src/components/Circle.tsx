import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import colors from '../constants/color';
interface CircleProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const Circle: React.FC<CircleProps> = ({ size = 100, color = colors.primary, style }) => {
  return (
    <View
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Circle;
