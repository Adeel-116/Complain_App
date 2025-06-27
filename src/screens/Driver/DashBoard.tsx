import { StyleSheet, View, Dimensions } from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Header from '../../components/Header';
import StatCard from '../../components/StatCard';
import WeeklyChart from '../../components/WeeklyCharts';

const { width, height } = Dimensions.get('window'); // 👈 screen size

const DashBoard = () => {
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
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.circleContainerTop}>
          <Circle size={width * 0.7} color={appColors.primary} />
        </View>

        <Header />

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
        <View style={styles.circleContainerBottom}>
          <Circle size={width * 0.8} color={appColors.primary} />
        </View>


        <View>
          <WeeklyChart />
        </View>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  container1: {
    width: '100%',
    flex: 0.40,
    backgroundColor: 'pink'
  },
  container2: {
    width: '100%',
    flex: 0.55,
    position: 'relative',
    backgroundColor: 'yellow',
    paddingVertical: 20,
     paddingHorizontal: width * 0.04,
  },
  circleContainerTop: {
    position: 'absolute',
    right: -width * 0.35, 
    top: -height * 0.05, 
  },
  circleContainerBottom: {
    position: 'absolute',
    top: '70%',
    left: -width * 0.6,
  },
  statContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04, 
    paddingVertical: 30,
  },
});
