import React, { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import appFonts from '../../constants/font';
import { Touchable } from 'react-native';

const { width, height } = Dimensions.get('window');

const complaintsData = [
  {
    id: 1,
    complainNo: 'Complain No 231',
    image: require('../../assets/images/truckImage.png'),
    ownerName: 'Ronald Wilfred',
    chassisNumber: '24883722',
    vehicleNumber: 'ENG - 204',
    modelYear: '2022',
    status: 'In Progress',
  },
  {
    id: 2,
    complainNo: 'Complain No 232',
    image: require('../../assets/images/truckImage.png'),
    ownerName: 'John Smith',
    chassisNumber: '24883723',
    vehicleNumber: 'ENG - 205',
    modelYear: '2023',
    status: 'Completed',
  },
  {
    id: 3,
    complainNo: 'Complain No 233',
    image: require('../../assets/images/truckImage.png'),
    ownerName: 'Mike Johnson',
    chassisNumber: '24883724',
    vehicleNumber: 'ENG - 206',
    modelYear: '2021',
    status: 'Pending',
  },
];

const getStatusColor = (status:any) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return '#2D7A7A';
    case 'completed':
      return '#4CAF50';
    case 'pending':
      return '#FF9800';
    default:
      return '#2D7A7A';
  }
};

const ComplaintCard = ({ item, navigation}:any) => (
  <View style={styles.cardWrapper}>
    <Text style={styles.topText}>{item.complainNo}</Text>
    <View style={styles.card}>
      <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.navigate("ComplainDetails")}>
        <View style={styles.icon}>
          <Icon name="arrow-up-right" size={30} color={'white'} />
        </View>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.vehicleImage} />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Owner Name:</Text>
          <Text style={styles.detailValue}>{item.ownerName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Chassis Number:</Text>
          <Text style={styles.detailValue}>{item.chassisNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Vehicle Number:</Text>
          <Text style={styles.detailValue}>{item.vehicleNumber}</Text>
        </View>
        <View style={styles.detailRowLast}>
          <Text style={styles.detailLabel}>Model Year:</Text>
          <Text style={styles.detailValue}>{item.modelYear}</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  </View>
);

const ComplainScreen = ({navigation}) => {
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
        <ScrollView>
        <Header
          onMenuPress={toggleDrawer}
          title="Complains"
          titleColor="#000"
          iconBgColor={appColors.primary}
          iconColor={'#fff'}
        />

        <View style={styles.complainContainer}>
          {complaintsData.map((item) => (
            <ComplaintCard key={item.id} item={item} navigation={navigation}/>
          ))}
        </View>
        </ScrollView>
      </View>

      <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation} />
      
    </>
  );
};

export default ComplainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circleContainerTop: {
    position: 'absolute',
    right: -width * 0.3,
    top: -height * 0.06,
  },
  circleContainerBottom: {
    position: 'absolute',
    top: '80%',
    left: -width * 0.6,
  },
  complainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  topText: {
    fontSize: 17,
    fontFamily: appFonts.outfit_semibold,
    color: '#000',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderTopRightRadius: 30,
    overflow: 'visible',
  },
  iconContainer: {
    position: 'absolute',
    top: -15,
    right: -15,
    zIndex: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    borderWidth: 2,
    borderColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
  },
  detailRowLast: {
    flexDirection: 'row',
  },
  detailLabel: {
    fontSize: 13,
    fontFamily: appFonts.outfit_medium,
    color: '#0A3B40',
    width: 120,
  },
  detailValue: {
    fontSize: 13,
    fontFamily: appFonts.outfit_medium,
    color: '#333',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
    fontFamily: appFonts.outfit_medium,

  },
 
});