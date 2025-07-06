import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import appColors from '../constants/color';
import appFonts from '../constants/font';

interface StatCardProps {
  image: any;
  total: number;
  label: string;
  iconSize?: number; // Optional custom icon size
}

function StatCard({ image, total, label, iconSize = 10 }: StatCardProps) {
  const wrapperSize = iconSize + 13; 

  return (
    <View style={styles.statCard}>
      <View style={styles.content}>
        <View style={styles.iconRow}>
          <View
            style={[
              styles.iconWrapper,
              {
                width: wrapperSize,
                height: wrapperSize,
                borderRadius: wrapperSize / 2,
              },
            ]}
          >
            <Image
              source={image}
              style={{ width: iconSize, height: iconSize }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.countText}>{total}</Text>
        </View>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    </View>
  );
}

export default StatCard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  statCard: {
    width: width * 0.44, 
    backgroundColor: appColors.secondary,
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  content: {
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconWrapper: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  countText: {
    fontSize: 18,
    color: 'white',
    fontFamily: appFonts.bold
  },
  labelText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: appFonts.medium
  },
});
