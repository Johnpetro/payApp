import React from 'react';
import { StyleSheet, View, Text,TextInput,Button,Alert,TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  return (
     <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Login Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
        />
         <Button
          title="Submit"
          style={styles.input}
          onPress={() => Alert.alert('Button!')}
          color="#007BFF" // Button color
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
        flex: 1,
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', // Centers horizontally
        backgroundColor: '#f5f5f5',
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
//   message:{
//     padding:5,
//     fontSize: 14,
//     color: '#555',
//   }
});
