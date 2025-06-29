import React, { useRef, useState } from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import StatCard from '../../components/StatCard';
import WeeklyChart from '../../components/WeeklyCharts';
import Header from '../../components/Header';
import CustomDrawer from '../../components/CustomDrawer';


const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const DashBoard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setIsDrawerOpen(false));
  };

  const toggleDrawer = () => (isDrawerOpen ? closeDrawer() : openDrawer());

  const cardData = [
    {
      image: require('../../assests/icons/complain-icon.png'),
      total: 15,
      label: 'Total Complaints',
    },
    {
      image: require('../../assests/icons/pending-icon.png'),
      total: 159,
      label: 'Total Pending',
    },
    {
      image: require('../../assests/icons/total-resolve-icon.png'),
      total: 15,
      label: 'Total Resolve',
    },
    {
      image: require('../../assests/icons/progress-icon.png'),
      total: 15,
      label: 'In Progress',
    },
  ];

  return (
    <>
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circleContainerTop}>
        <Circle size={width * 0.7} color={appColors.primary} />
      </View>
      <View style={styles.circleContainerBottom}>
        <Circle size={width * 0.8} color={appColors.primary} />
      </View>

      {/* Header */}
      <Header onMenuPress={toggleDrawer} title={"Dashboard"}/>

      <ScrollView>
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
      {/* Overlay */}
      {isDrawerOpen && (
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
          <TouchableOpacity style={styles.overlayTouchable} onPress={closeDrawer} />
        </Animated.View>
      )}

      {/* Drawer Component */}
      <CustomDrawer slideAnim={slideAnim} closeDrawer={closeDrawer} />
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: { flex: 1 },
  container1: { flex: 0.45 },
  container2: {
    flex: 0.55,
    paddingVertical: 20,
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
    top: '70%',
    left: -width * 0.6,
    zIndex: -1,
  },
  statContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: 30,
  },
  overlay: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'black',
    zIndex: 2,
  },
  overlayTouchable: {
    flex: 1,
  },
});
