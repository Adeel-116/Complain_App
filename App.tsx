import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import DashBoard from './src/screens/Driver/DashBoard';
import CreateNew from './src/screens/Driver/CreateNew';
import ComplainScreen from './src/screens/Driver/ComplainScreen';
import ScannerScreen from './src/screens/Driver/ScannerScreen';
import NumberScreen from './src/screens/Driver/NumberScreen';
import VehicleInfoScreen from './src/screens/Driver/VehicleInfoScreen';
import ComplainDetails from './src/screens/Driver/ComplainDetails';
import DocDrive from './src/screens/SuperVisior/DocDrive';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent" 
        barStyle="dark-content"
        translucent 
      />
      <DocDrive navigation={undefined} />

      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DashBoard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="DashBoard" component={DashBoard} />
          <Stack.Screen name="CreateNew" component={CreateNew} />
          <Stack.Screen name="ComplainScreen" component={ComplainScreen} /> 
           <Stack.Screen name="ScannerScreen" component={ScannerScreen} /> 
          <Stack.Screen name="NumberScreen" component={NumberScreen} /> 
          <Stack.Screen name="VehicleInfoScreen" component={VehicleInfoScreen} />
          <Stack.Screen name="ComplainDetails" component={ComplainDetails} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}
