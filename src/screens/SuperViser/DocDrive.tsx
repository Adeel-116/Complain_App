import React, { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import CustomDropdown from '../../components/CustomDropdown';
import appFonts from '../../constants/font';
const { width, height } = Dimensions.get('window');
const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

const DocDrive = ({ navigation }: any) => {
  const complaintsData = [
    {
      image: require('../../assets/images/truckpic1.png'),
      truckName: 'RoadMaster',
      chassisNumber: '24883722',
      vehicleNumber: 'ENG - 204',
      modelYear: '2022',
    },
    {
      image: require('../../assets/images/truckpic1.png'),
      truckName: 'CargoKing',
      chassisNumber: '24883723',
      vehicleNumber: 'ENG - 205',
      modelYear: '2023',
    },
    {
      image: require('../../assets/images/truckpic1.png'),
      truckName: 'TrailBlazer',
      chassisNumber: '24883724',
      vehicleNumber: 'ENG - 206',
      modelYear: '2021',
    },
  ];

  const options = [
    { optionLabel: "Complete", optionBgColor: "#0A3B40", fontColor: '#fafafa' },
    { optionLabel: "In Progress", optionBgColor: "#007BFF", fontColor: '#fafafa' },
    { optionLabel: "Transfer", optionBgColor: "#4A4A4A", fontColor: '#fafafa' },
    { optionLabel: "Rejected", optionBgColor: "#FF4F4F", fontColor: '#fafafa' },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.circleContainerTop}>
          <Circle size={width * 0.6} color={appColors.primary} />
        </View>
        <View style={styles.circleContainerBottom}>
          <Circle size={width * 0.8} color={appColors.primary} />
        </View>

        <Header
          onMenuPress={toggleDrawer}
          title={"Complains"}
          titleColor={"#000"}
          iconBgColor={appColors.primary}
          iconColor={"white"}
        />

        <View style={styles.innerContainer}>
          <View style={styles.dropdownContainer}>
            <CustomDropdown
              options={options}
              defaultValue="Select Status"
              onSelect={(val) => console.log(val)}
            />
          </View>

          <ScrollView style={styles.cardContainer} showsVerticalScrollIndicator={false}>
            {complaintsData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ComplainDetails')}
              >
                <View style={styles.vehicleInfo}>
                  <View style={styles.detailRow}>
                    <Text style={{ fontFamily: appFonts.outfit_medium, fontSize: 20 }}>
                      {item.truckName}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Chassis Number: </Text>
                    <Text style={styles.detailValue}>{item.chassisNumber}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Vehicle Number: </Text>
                    <Text style={styles.detailValue}>{item.vehicleNumber}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Model Year: </Text>
                    <Text style={styles.detailValue}>{item.modelYear}</Text>
                  </View>
                </View>

                <View style={styles.vehicleImage}>
                  <Image
                    source={item.image}
                    style={styles.truckImage}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <CustomDrawer
        isOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
        navigation={navigation}
      />
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
    right: -wp(30),
    top: -hp(6),
  },
  circleContainerBottom: {
    position: 'absolute',
    top: '80%',
    left: -wp(60),
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(4),
    marginTop: hp(10),
  },
  dropdownContainer: {
    marginBottom: hp(2),
  },
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#D7d8d5',
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: hp(2),
  },
  vehicleInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  vehicleImage: {
    width: wp(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  truckImage: {
    width: '100%',
    height: hp(12),
  },
  detailLabel: {
    fontSize: wp(3.6),
    fontFamily: appFonts.outfit_medium,
    color: '#0A3B40',
  },
  detailValue: {
    fontSize: wp(3.6),
    fontFamily: appFonts.outfit_medium,
    color: '#333',
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: hp(1),
  },
});
