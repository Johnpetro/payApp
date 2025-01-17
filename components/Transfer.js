import React, { useState,useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as LocalAuthentication from 'expo-local-authentication';
export default function Transfer({route}) {
  const [phone, setPhone] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Store results if needed
  const [id, setId] =  useState(null)
  const [username,setUsername]= useState('')
  const [amount,setAmount]=useState('');
  const [myphone,setMyphone]= useState('')
  const[myId, setMyId] =  useState('')
  const handleAmount = (val)=>{
    setAmount(val)
    
  }


 


  useEffect(() => {
    const getData = async () => {
      try {
        const Id_string = await AsyncStorage.getItem('@storage_Key');
       
            const Id_ = JSON.parse(Id_string)
            
            
        if (Id_._id !== null) {
          setMyId(Id_._id)
          console.log("dsdsdsdsd"+Id_._id);
          console.log("only Id....."+myId)
        }
      } catch (e) {
        console.error(e);
      }}
      
    
   getData()
    // console.log(senderInfo())
  const { user } = route.params;
  setPhone(user[0].phone)
  setUsername(user[0].username)
  setId(user[0]._id)


 
  },[])
 


const authenticateUser = async () => {
  try {
    // Check if hardware supports biometrics
    const isHardwareAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isHardwareAvailable) {
      Alert.alert('Error', 'Biometric authentication is not supported on this device.');
      return false;
    }

    // Check if any biometric data is enrolled
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert('Error', 'No biometric data enrolled. Please set up biometrics.');
      return false;
    }

    // Prompt user for authentication
    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to proceed with the transfer',
      fallbackLabel: 'Use passcode',
    });

    if (authResult.success) {
      return true; // Authentication successful
    } else {
      Alert.alert('Authentication Failed', 'Unable to verify your identity.');
      return false;
    }
  } catch (error) {
    console.error('Authentication error:', error);
    Alert.alert('Error', 'An error occurred during authentication.');
    return false;
  }
};

const Transfer = async () => {
  console.log(phone);
  console.log(myId);
  console.log(amount);

  const isAuthenticated = await authenticateUser();
  if (!isAuthenticated) {
    return; // Stop if authentication fails
  }

  try {
    const response = await axios.post(
      'http://51.20.248.109:5000/transfer',
      {
        amount: amount,
        phone: phone,
        myId: myId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      console.log('Transfer successful');
    }
  } catch (error) {
    if (error.response) {
      // Server responded with an error
      console.error('Error (Server):', error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error (Request):', error.request);
    } else {
      // Other errors
      console.error('Error (General):', error.message);
    }
    Alert.alert('Transfer Failed', 'Something went wrong. Please try again.');
  }
};





  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hamisha Kwenda Namba ya Simu</Text>
      </View>

      {/* Recipient Info */}
      <View style={styles.recipientInfo}>
        <Text style={styles.recipientText}>
          Hamisha kwenda <Text style={styles.recipientNumber}>{phone}</Text>{' '}
          (<Text style={styles.recipientName}>{username}</Text>)
        </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.saveNumber}>
        <TextInput placeholder="Kiasi" style={styles.input} onChangeText={handleAmount} />
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText} onPress={Transfer}>ENDELEA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  recipientInfo: {
    padding: 10,
    marginBottom: 15,
  },
  recipientText: {
    fontSize: 16,
    color: '#000',
  },
  recipientNumber: {
    fontWeight: 'bold',
  },
  recipientName: {
    fontStyle: 'italic',
  },
  saveNumber: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchResults: {
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  resultsHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  resultItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
  continueButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
