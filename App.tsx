import { StatusBar, StyleSheet, View } from 'react-native';
// import DashBoard from './src/screens/Driver/DashBoard';
import CreateNew from './src/screens/Driver/CreateNew';
import ScannerScreen from './src/screens/Driver/ScannerScreen';
import NumberScreen from './src/screens/Driver/NumberScreen';
import VehicleInfoScreen from './src/screens/Driver/VehicleInfoScreen';
import ComplainScreen from './src/screens/Driver/ComplainScreen';
import ComplainDetails from './src/screens/Driver/ComplainDetails';
// import DashBoard from './src/screens/Driver/DashBoard';
// import HelloWorld from './src/screens/Driver/HelloWorld';
function App() {

  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
       <ComplainDetails
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;