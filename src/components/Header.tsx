import React,{useState} from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, Modal} from 'react-native';
import appColors from '../constants/color';
import Icon from 'react-native-vector-icons/Feather';
import CustomDrawer from './CustomDrawer';
const { width, height } = Dimensions.get('window');

const Header = () => {
 const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const iconSize = width * 0.06; // ~24 on normal phones
  const boxSize = width * 0.1;   // ~40px on normal phones

  return (
    <>
    <View style={styles.innerContainer}>
      {/* Left - Icon Box */}
       <TouchableOpacity onPress={() => setDrawerVisible(true)} style={[styles.iconBox, { width: boxSize, height: boxSize }]}>
          <Icon name="menu" size={iconSize} color={'#fafafa'} />
        </TouchableOpacity>

      {/* Center - Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Right - Profile Image */}
      <Image
        source={require('../assests/images/profile.png')}
        style={[styles.profileImage, { width: boxSize, height: boxSize, borderRadius: boxSize / 2 }]}
      />
    </View>

     <Modal visible={drawerVisible} transparent animationType="slide">
        <CustomDrawer onClose={() => setDrawerVisible(false)} />
      </Modal>
      </>
  );
};

export default Header;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05, // 5% of screen width
    height: height * 0.08, // ~60px on average screen
    marginTop: height * 0.01,
  },
  iconBox: {
    borderRadius: 10,
    backgroundColor: appColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: width * 0.045, // ~18 on normal phones
    fontWeight: 'bold',
  },
  profileImage: {
    resizeMode: 'cover',
  },
});
