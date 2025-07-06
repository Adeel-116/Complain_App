import React from 'react';
import { View } from 'react-native';
import DrawerMenuItem from './DrawerMenuItem';
import appColors from '../../constants/color';

// TODO: Later API se dynamic data lena
const drawerItems = [
  {
    text: 'Dashboard',
    iconImage: require('../../assets/images/menu-icon-dashboard.png'),
    backgroundColor: appColors.primary,
    onPress: () => console.log('Dashboard pressed'),
  },
  {
    text: 'Complain',
    iconImage: require('../../assets/images/complain-icon.png'),
    backgroundColor: appColors.secondary,
    dropdown: true,
  },
];

const DrawerMenu = () => {
  return (
    <View style={{}}>
      {drawerItems.map((item, index) => (
        <DrawerMenuItem
          key={index}
          text={item.text}
          iconImage={item.iconImage}
          backgroundColor={item.backgroundColor}
          dropdown={item.dropdown}
          // onPress={() => {
          //   item.onPress?.();
          //   closeDrawer();
          // }}
        />
      ))}
    </View>
  );
};

export default DrawerMenu;
