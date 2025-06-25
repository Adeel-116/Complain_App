import { StatusBar, StyleSheet, View } from 'react-native';
import DashBoard from './src/screens/Driver/DashBoard';
function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
       <DashBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;