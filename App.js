import React from 'react';
import { StyleSheet, View, Text,TextInput } from 'react-native';
import Register from './components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet } from 'react-native';
import Login from './components/Login';
import OTP  from './components/OTP'
// import RegisterScreen from './components/Register';
const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //    <Register />
    // </View>

    // ...

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />
        
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ title: 'Enter OTP' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '90%', // Adjust card width as needed
    padding: 20 ,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
