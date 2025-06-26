import { StyleSheet, View, Image, Text } from 'react-native';
import Circle from '../../components/Circle';
import appColors from '../../constants/color';
import Icon from 'react-native-vector-icons/Feather';

const DashBoard = () => {

interface StatCardData {
  image: any;       
  total: number;
  label: string;
}

const cardData: StatCardData[] = [
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
          <Circle size={260} color={appColors.primary} />
        </View>

         <View style={styles.innerContainer}>

        {/* Left - Icon Box */}
      <View style={styles.iconBox}>
        <Icon name="menu" size={24} color={'#fafafa'} />
      </View>

      {/* Center - Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Right - Profile Image */}
      <Image
  source={require('../../assests/images/profile.png')}
  style={styles.profileImage}
/>
        </View>


        <View style={styles.innerContainerCard}>
            <View>
                
            </View>
        </View>


      </View>


      <View style={styles.container2}>

        <View style={styles.circleContainerBottom}>
          <Circle size={300} color={appColors.primary}  />
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
    // backgroundColor: 'pink',
    position: 'relative',
  },
  container1: {
    width: '100%',
    flex: 2/3,
    
    // backgroundColor: 'blue',
  },
  container2: {
    width: '100%',
    flex: 1,
    // backgroundColor: 'green',
    position: 'relative',
  },
  circleContainerTop: {
    position: 'absolute',
    right: '-35%',
    top: '-15%',
  },
  circleContainerBottom:{
    position: 'absolute',
    bottom: '0%',
    top: '70%',
    left: '-50%',
  },
  innerContainer: {
    width: '100%',
    height: 70,
    // backgroundColor: '#F5F9FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
      paddingHorizontal: 15,
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: appColors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: appColors.textPrimary,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'pink'
  },
  innerContainerCard:{
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: 'yellow',
  },
  cardContainer:{
    width: '45%',
    height: 100,
    borderRadius: 10,
    backgroundColor: appColors.secondary,
  },
  para:{
    width: '100%',
    flexDirection: 'row'
  },
  cardIcon:{
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
