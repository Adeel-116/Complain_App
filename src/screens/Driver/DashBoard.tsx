import React, { useState } from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  StatusBar, 
  
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import StatCard from '../../components/StatCard';
import WeeklyChart from '../../components/WeeklyCharts';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';

const { width, height } = Dimensions.get('window');

const DashBoard = ({navigation}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const cardData = [
    {
      image: require('../../assets/icons/complain-icon.png'),
      total: 15,
      label: 'Total Complaints',
    },
    {
      image: require('../../assets/icons/pending-icon.png'),
      total: 159,
      label: 'Total Pending',
    },
    {
      image: require('../../assets/icons/total-resolve-icon.png'),
      total: 15,
      label: 'Total Resolve',
    },
    {
      image: require('../../assets/icons/progress-icon.png'),
      total: 15,
      label: 'In Progress',
    },
  ];

  return (
    <>
      <View style={styles.container}>

        <View style={styles.circleContainerTop}>
          <Circle size={width * 0.7} color={appColors.primary} />
        </View>
        <View style={styles.circleContainerBottom}>
          <Circle size={width * 0.8} color={appColors.primary} />
        </View>

         <ScrollView>
        <Header onMenuPress={toggleDrawer} title={'Dashboard'} />

          <View style={styles.container1}>
            <View style={styles.statContainer}>
              {cardData.map((card, index) => (
                <StatCard
                  key={index}
                  image={card.image}
                  total={card.total}
                  label={card.label}
                  iconSize={26}
                />
              ))}
            </View>
          </View>

          <View style={styles.container2}>
            <WeeklyChart />
            <WeeklyChart />
            <WeeklyChart />
          </View>
        </ScrollView>
      </View>

      {/* Custom Drawer */}
      <CustomDrawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)} navigation={navigation} />
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: { flex: 1 },
  container1: { flex: 0.45 },
  container2: {
    flex: 0.55,
    // paddingVertical: 20,
    paddingHorizontal: width * 0.04,
  },
  circleContainerTop: {
    position: 'absolute',
    right: -width * 0.35,
    top: -height * 0.05,
    zIndex: -1,
  },
  circleContainerBottom: {
    position: 'absolute',
    top: '80%',
    left: -width * 0.6,
    zIndex: -1,
  },
  statContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.04,
  },
});
