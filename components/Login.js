import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, Text,TextInput,Button,Alert,TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  const [email,setEmail] =  useState('');
  const [password,setPassword]=useState('')

  const handleEmail =(val)=>{
    setEmail(val)
  }
  const handlePassword =(val)=>{
    setPassword(val)
  }
  const loginUser = async ()=>{
    try{
    
      const  response =  await axios.post('http://192.168.144.61:5000/login',{
      email:email,
      password:password
    },{
     headers:{
      'Content-Type':'application/json',
     } 
    })
    if(response.status==200){
      console.log("login successifyly")
      console.log(response.data);
      navigation.navigate('Home')
    }
    // console.log(response)




    }catch (error) {
      // Axios error handling
      if (error.response) {
        // Server responded with a status outside 200-299
        console.error('Error posting data (Server Response):', error.response.data);
        // console.error('Status:', error.response.status); find a way to hand
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error posting data (No Response):', error.request);
      } else {
        // Other errors
        console.error('Error posting data (General):', error.message);
      }
    }
  };

  return (
     <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Login Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={handlePassword}
        />
         <Button
          title="Submit"
          style={styles.signInButton}
          // onPress={() => Alert.alert('Button!')}
          color="#007BFF" // Button color
          onPress={loginUser}
        />

        
        
        <View style={styles.signupText}>
        <Text style={styles.message}>Don't have account?  </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center', // Centers vertically
        // alignItems: 'center', // Centers horizontally
        // backgroundColor: '#f5f5f5',
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 20,
        justifyContent: 'center',
      },
        cardText:{
            fontSize:20,
            fontWeight:'bold',
            textAlign:'center',
            padding:5
      },
    
    signupLink: {
      fontSize: 14,
      color: '#007bff',
      fontWeight: 'bold',
      paddingTop:2
      
    },  
    signupText:{
    paddingLeft:7,
     flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    },
  card: {
    width: '100%', // Adjust card width as needed
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
    margin: 9,
    // borderWidth: 1,
    // padding: 10,
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
//   message:{
//     padding:5,
//     fontSize: 14,
//     color: '#555',
//   }
});
