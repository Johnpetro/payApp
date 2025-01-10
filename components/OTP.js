// import { useState } from 'react';
import React , {useEffect, useState} from 'react';
import { StyleSheet, View, Text,TextInput,Button,Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
// const [username,setUsername]= useState(null)
export default function OTPForm({navigation}) {
  // OTP CODE
  const [otp, setOtp] = useState(null);
  const [myOtp,setMyOtp] =useState(null);

  useEffect(()=>{
  const checkToken = async () => {
    try {
      const OTP = await SecureStore.getItemAsync('userOTP');
      if (!OTP) {
        // If no token, redirect to Login screen
        navigation.navigate('Login')
      }
      if (OTP) {
        // const parsedToken = JSON.parse(token);  // Parse only if it's a string
        // console.log(OTP);
        // setUsername(OTP)
        return OTP;
      }
      // console.log(token)
      // return token
    } catch (error) {
      console.error('Error checking token:', error);
      navigation.navigate('Login') // Redirect to Login on error
    }
  };
 
  // console.log(JSON.parse(checkToken()));
  setOtp(checkToken());

},[]);

const getOTP =(val)=>{
  setMyOtp(val)
}
const send_otp = ()=>{
  // console.log(typeof )
  // if(!myOtp)return navigation.navigate('Error');
  if(myOtp==parseInt( otp.value))return navigation.navigate('Home')
}

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>OTP{otp}</Text>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          onChangeText={getOTP}
        />
         <Button
          title="Submit"
          style={styles.input}
          onPress={send_otp}
          color="#007BFF" // Button color
        />
      </View>
     </View>
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
    // height:"",
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
