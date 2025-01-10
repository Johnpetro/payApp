// import axios from 'axios';
// import React, { useState } from 'react';
// import { StyleSheet, View, Text,TextInput,Button,Alert,TouchableOpacity } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
// export default function Register({ navigation }) {
//   const [email,setEmail] =  useState('');
//   const [password,setPassword]=useState('')

//   const handleEmail =(val)=>{
//     setEmail(val)
//   }
//   const handlePassword =(val)=>{
//     setPassword(val)
//   }
//   const loginUser = async ()=>{
//     try{
    
//       const  response =  await axios.post('http://192.168.145.61:5000/login',{
//       email:email,
//       password:password
//     },{
//      headers:{
//       'Content-Type':'application/json',
//      } 
//     })
//     if(response.status==200){
//       console.log("login successifyly")
//       console.log(response.data);
//       // const saveSessionToken = async (token) => {
//       //   try {
//       //     await SecureStore.setItemAsync('sessionToken', token);
//       //     console.log("saved "+ token)
//       //   } catch (error) {
//       //     console.error('Error saving token:', error);
//       //   }
//       // };
//       // if(saveSessionToken(JSON.stringify(response.data))){
//       navigation.navigate('Home')
//       // }
//     }
//     // console.log(response)




//     }catch (error) {
//       // Axios error handling
//       if (error.response) {
//         // Server responded with a status outside 200-299
//         console.error('Error posting data (Server Response):', error.response.data);
//         // console.error('Status:', error.response.status); find a way to hand
//       } else if (error.request) {
//         // Request was made but no response was received
//         console.error('Error posting data (No Response):', error.request.status);
//       } else {
//         // Other errors
//         console.error('Error posting data (General):', error.message);
//       }
//     }
//   };

//   return (
//      <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.cardText}>Login Form</Text>
        
//         <TextInput
//           style={styles.input}
//           placeholder="email"
//           onChangeText={handleEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="password"
//           onChangeText={handlePassword}
//         />
//          <Button
//           title="Submit"
//           style={styles.signInButton}
//           // onPress={() => Alert.alert('Button!')}
//           color="#007BFF" // Button color
//           onPress={loginUser}
//         />

        
        
//         <View style={styles.signupText}>
//         <Text style={styles.message}>Don't have account?  </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text style={styles.signupLink}> Sign Up</Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//      </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // justifyContent: 'center', // Centers vertically
//         // alignItems: 'center', // Centers horizontally
//         // backgroundColor: '#f5f5f5',
//         flex: 1,
//         backgroundColor: '#1E1E1E',
//         paddingHorizontal: 20,
//         justifyContent: 'center',
//       },
//         cardText:{
//             fontSize:20,
//             fontWeight:'bold',
//             textAlign:'center',
//             padding:5
//       },
    
//     signupLink: {
//       fontSize: 14,
//       color: '#007bff',
//       fontWeight: 'bold',
//       paddingTop:2
      
//     },  
//     signupText:{
//     paddingLeft:7,
//      flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',

//     },
//   card: {
//     width: '100%', // Adjust card width as needed
//     // height:"",
//     padding: 20 ,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 5, // Adds shadow on Android
//     shadowColor: '#000', // Adds shadow on iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },

// input: {
//     height: 40,
//     margin: 9,
//     // borderWidth: 1,
//     // padding: 10,
//     borderWidth: 1,
//     borderColor: '#E5E5E5',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     height: 40,
//     fontSize: 16,
//   },
//   signInButton: {
//     backgroundColor: '#FFD700',
//     borderRadius: 8,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
// //   message:{
// //     padding:5,
// //     fontSize: 14,
// //     color: '#555',
// //   }
// });

import axios from 'axios';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (val) => {
    setEmail(val);
  };

  const handlePassword = (val) => {
    setPassword(val);
  };

  const saveToken = async (token) => {
    try {
      const tokenString = typeof token === 'string' ? token : JSON.stringify(token.result[0]);
      await SecureStore.setItemAsync('userToken', tokenString);
      await SecureStore.setItemAsync('userOTP', token.otp);
      await AsyncStorage.setItem('@storage_Key', tokenString);
      console.log('Token saved:', tokenString);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  // /////get only id 
  // const storeData = async (value) => {
  //   try {
   
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };




  // 

  const loginUser = async () => {
    try {
      const response = await axios.post(
        'http://192.168.223.61:5000/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log('Login successful');
        // console.log("sasa" ,response.data);

        // Save the token securely
        // const token = response.data; // Assuming response contains a `token`
        // console.log(token)
        await saveToken(response.data);

        // Navigate to Home screen
        navigation.navigate('OTP');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error
        console.error('Error (Server):', error.response.data);
        Alert.alert('Login Failed', error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error (Request):', error.request);
        Alert.alert('Login Failed', 'No response from server');
      } else {
        // Other errors
        console.error('Error (General):', error.message);
        Alert.alert('Login Failed', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Login Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePassword}
          value={password}
        />
        <Button
          title="Submit"
          style={styles.signInButton}
          color="#007BFF"
          onPress={loginUser}
        />

        <View style={styles.signupText}>
          <Text style={styles.message}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  input: {
    margin: 9,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    paddingLeft: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupLink: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
    paddingTop: 2,
  },
});
