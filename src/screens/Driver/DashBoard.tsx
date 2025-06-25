import { StyleSheet, View, Image, Text } from 'react-native';
import Circle from '../../components/Circle';
import colors from '../../constants/color';
import Icon from 'react-native-vector-icons/Feather';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.circleContainerTop}>
          <Circle size={260} color={colors.primary} />
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

        </View>


      </View>


      <View style={styles.container2}>

        <View style={styles.circleContainerBottom}>
          <Circle size={300} color={colors.primary}  />
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
    backgroundColor: colors.secondary,
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
    color: colors.textPrimary,
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
    backgroundColor: colors.primary,
  }
});
