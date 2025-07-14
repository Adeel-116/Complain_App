import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Circle from '../components/Circle';
import appColors from '../constants/color';
import CustomButton from '../components/CustomButton';
import appFonts from '../constants/font';
import {useAuth} from "../context/AuthContext"
const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    const [credentials, setCredentials] = useState({
        username: '', 
        password: ''
    })

    const {role, setRole} = useAuth();

    const handleLogin = ()=>{
       const  getUserName = credentials.username
       const getPassword = credentials.password

       if (getUserName === "Hello" && getPassword === "Pakistan@123"){
         setRole("SuperVisior")
         navigation.replace('DocDrive')
        setCredentials({ username: '', password: '' });
       }else if (getUserName === "Hello" && getPassword === "Pakistan@1234"){
        setRole("Driver")
        navigation.replace('DashBoard')
        setCredentials({ username: '', password: '' });
       }
       else{
        setRole(null)
       }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Decorative Circles */}
        <View style={styles.circleTop}>
          <Circle size={width * 0.6} color="white" />
        </View>
        <View style={styles.circleBottom}>
          <Circle size={width * 0.8} color="white" />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.innerContainer}
        >
          <Text style={styles.title}>Login</Text>

          {/* Username Input */}
          <TextInput
            placeholder="Enter username"
            placeholderTextColor="#999"
            style={styles.input}
            value={credentials.username}
            onChangeText={(text)=> setCredentials((pre)=> ({...pre, username: text})) }
          />

          {/* Password Input */}
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#999"
            style={[styles.input, { marginTop: 15 }]}
            value={credentials.password}
            onChangeText={(text)=> setCredentials((pre)=> ({...pre, password: text})) }
            secureTextEntry
          />

          <View style={styles.buttonContainer}>
            <CustomButton ButtonTitle="Login" onPress={handleLogin} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  circleTop: {
    position: 'absolute',
    top: -height * 0.05,
    right: -width * 0.3,
  },
  circleBottom: {
    position: 'absolute',
    top: '80%',
    left: -width * 0.6,
  },
  title: {
    fontSize: 32,
    fontFamily: appFonts.outfit_semibold,
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#000',
    fontFamily: appFonts.outfit_medium,
    elevation: 3,
  },
  buttonContainer: {
    marginTop: 25,
    width: '100%',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
});
