import { StyleSheet, View, Image, Text } from 'react-native';
import Circle from '../../components/Circle';
import colors from '../../constants/color';
const DashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.circleContainerTop}>
          <Circle size={260} color={colors.primary} />
        </View>

         <View style={styles.innerContainer}>
      {/* Left - Colored Box with Hamburger Icon */}
      <View style={styles.iconBox}>
        <Icon name="menu" size={24} color="#fff" />
      </View>

      {/* Center - Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Right - Profile Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/40' }}
        style={styles.profileImage}
      />
    </View>


      </View>


      <View style={styles.container2}>

        <View style={styles.circleContainerBottom}>
          <Circle size={200} color={colors.primary}  />
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
    right: '-25%',
    top: '-15%',
  },
  circleContainerBottom:{
    position: 'absolute',
    bottom: '0%',
    top: '90%',
    left: '-10%',
  },
  innerContainer: {
    width: '100%',
    height: 70,
    paddingHorizontal: 16,
    backgroundColor: '#F5F9FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#0096FF',
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
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

});
