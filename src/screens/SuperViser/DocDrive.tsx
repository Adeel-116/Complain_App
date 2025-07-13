import React, { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import CustomDropdown from '../../components/CustomDropdown';


const { width, height } = Dimensions.get('window');
const DocDrive = ({ navigation }: any) => {

  const options = [
    {optionLabel: "Complete", optionBgColor: "#0A3B40", fontColor: '#fafafa'},
    {optionLabel: "In Progress", optionBgColor: "#007BFF", fontColor: '#fafafa'},
    {optionLabel: "Transfer", optionBgColor: "#4A4A4A", fontColor: '#fafafa'},
    {optionLabel: "Rejected", optionBgColor: "#FF4F4F", fontColor: '#fafafa'},
  ]
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <>
      <View style={styles.container}>
        {/* Background Circles */}
        <View style={styles.circleContainerTop}>
          <Circle size={width * 0.6} color={appColors.primary} />
        </View>
        <View style={styles.circleContainerBottom}>
          <Circle size={width * 0.8} color={appColors.primary} />
        </View>

        {/* Header */}
        <Header
          onMenuPress={toggleDrawer}
          title={"Create New"}
          titleColor={"#fff"}
          iconBgColor={appColors.primary}
          iconColor={"white"}
        />


        <View style={styles.innerContainer}>


          <View>
            <CustomDropdown
              options={options}
              defaultValue="Select Status"
              onSelect={(val) => console.log(val)}
            />
          </View>

          <View style={styles.cardContainer}>

          <View style={styles.card}>
              <View style={styles.vehicleInfo}>

              </View>
          </View>

          </View>


        </View>


















      </View>

      <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation} />


    </>
  );
};

export default DocDrive;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  circleContainerTop: {
    position: 'absolute',
    right: -width * 0.30,
    top: -height * 0.06,
  },
  circleContainerBottom: {
    position: 'absolute',
    top: '80%',
    left: -width * 0.6,
  },
  innerContainer: {
    width: '100%',
    backgroundColor: 'yellow',
    paddingHorizontal: width * 0.04,
    marginTop: 100,
  },
  cardContainer:{
      width: '100%',
      // backgroundColor: 'blue',
      height: 200,
  },
  card:{
    width: '100%',
    height: 150, 
    borderWidth: 2, 
    borderColor: '#D7d8d5',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  vehicleInfo:{

  }
});
