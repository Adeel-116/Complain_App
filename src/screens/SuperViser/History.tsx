import React, { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import appFonts from '../../constants/font';

const { width, height } = Dimensions.get('window');
const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

const History = ({ navigation }: any) => {
  const complaintsData = [
    {
      image: require('../../assets/images/truckpic1.png'),
      No_of_visit: '01',
      lastVisit: 'December 13, 2024',
      report_problem: 'Engine Service',
      total_cost: '$300',
    },
    {
      image: require('../../assets/images/truckpic1.png'),
      No_of_visit: '02',
      lastVisit: 'January 10, 2024',
      report_problem: 'Brake Failure',
      total_cost: '$450',
    },
    {
      image: require('../../assets/images/truckpic1.png'),
      No_of_visit: '03',
      lastVisit: 'March 8, 2024',
      report_problem: 'Oil Change',
      total_cost: '$120',
    },
    {
      image: require('../../assets/images/truckpic1.png'),
      No_of_visit: '03',
      lastVisit: 'March 8, 2024',
      report_problem: 'Oil Change',
      total_cost: '$120',
    },
  ];

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
          title={'Complains'}
          titleColor={'#000'}
          iconBgColor={appColors.primary}
          iconColor={'white'}
          showBackButton={true}
          onBackPress={() => navigation.goBack()}
        />

        {/* Body */}
        <View style={styles.innerContainer}>
          <ScrollView
            style={styles.cardContainer}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {complaintsData.map((item, index) => (
              <View key={index} style={styles.card}>
                {/* Image */}
                <View style={styles.vehicleImage}>
                  <Image
                    source={item.image}
                    style={styles.truckImage}
                    resizeMode="contain"
                  />
                </View>

                {/* Info */}
                <View style={styles.vehicleInfo}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Number of Visit: </Text>
                    <Text style={styles.detailValue}>
                      {item.No_of_visit || 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Last Visit: </Text>
                    <Text style={styles.detailValue}>
                      {item.lastVisit || 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Report Problem: </Text>
                    <Text style={styles.detailValue}>
                      {item.report_problem || 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Total Cost: </Text>
                    <Text style={styles.detailValue}>
                      {item.total_cost || 'N/A'}
                    </Text>
                  </View>
                </View>
              </View>
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

export default History;

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
    justifyContent: 'center', // This centers the content vertically
  },
  cardContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // This centers the cards vertically in the scroll view
    paddingVertical: hp(2), // Add some padding for better spacing
  },
  card: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#D7d8d5',
    borderRadius: wp(4),
    padding: wp(3),
    backgroundColor: '#fff',
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: wp(1.9),
    borderLeftColor: appColors.primary,
    minHeight: hp(18),
  },
  vehicleImage: {
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(4),
  },
  truckImage: {
    width: '100%',
    height: hp(14),
    borderRadius: wp(2),
  },
  vehicleInfo: {
    flex: 1,
  },
  detailLabel: {
    fontSize: wp(3.6),
    fontFamily: appFonts.outfit_medium,
    color: '#0A3B40',
  },
  detailValue: {
    fontSize: wp(3.4),
    fontFamily: appFonts.outfit_medium,
    color: '#333',
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: hp(0.8),
  },
});