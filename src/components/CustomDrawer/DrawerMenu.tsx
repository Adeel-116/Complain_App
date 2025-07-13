import React from 'react';
import { View } from 'react-native';
import DrawerMenuItem from './DrawerMenuItem';
import appColors from '../../constants/color';

const drawerItems = [
  {
    text: 'Dashboard',
    iconImage: require('../../assets/images/menu-icon-dashboard.png'),
    backgroundColor: appColors.primary,
    onPress: (navigation: any) => navigation.navigate('DashBoard'),
  },
  {
    text: 'Complain',
    iconImage: require('../../assets/images/complain-icon.png'),
    backgroundColor: appColors.secondary,
    dropdown: true,
  },
];

const DrawerMenu = ({ navigation }: any) => {
  return (
    <View>
      {drawerItems.map((item, index) => (
        <DrawerMenuItem
          key={index}
          text={item.text}
          iconImage={item.iconImage}
          backgroundColor={item.backgroundColor}
          dropdown={item.dropdown}
          navigation={navigation}
          onPress={item.onPress ? () => item.onPress(navigation) : undefined}
        />
      ))}
    </View>
  );
};

export default DrawerMenu;
