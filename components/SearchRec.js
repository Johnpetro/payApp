import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
// import { red } from 'react-native-reanimated/lib/typescript/Colors';
export default function SearchRec({navigation}) {
  const [phone, setPhone] = useState(null);
  const [inputval,setInput] = useState(null)
  const searchPhone = (val)=>{
    setPhone(val);
  }

  const handleSearch = async ()=>{

    if(phone=="")return setInput("Can not submit empty value.")
    

    try { 
      const response = await axios.get(
          `http://51.20.248.109:5000/user/${phone}`
        );

    // if(response.status==400) return console.log("non")
    if(response.status==200){
      function isArrayEmpty(array) {
        return Array.isArray(array) && array.length === 0;
      }
      
      // Example usage
      if (isArrayEmpty(response.data)) {
        setInput("Opps..User not found..")
      } else {
        console.log(response.data);
         response.data
        navigation.navigate('Transfer',{user:response.data})
      }
    }

    
  } catch (error) {
    // Axios error handling
    if (error.response) {
      // Server responded with a status outside 200-299
      console.error('Error posting data (Server Response):', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Error posting data (No Response):', error.request);
    } else {
      // Other errors
      console.error('Error posting data (General):', error.message);
    }
  }
//   };
};

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hamisha Kwenda Namba ya Simu</Text>
      </View>
      {/* Input Fields */}
      <View style={styles.saveNumber}>
        {/* Phone Input */}
        <TextInput
          placeholder="Namba ya simu"
          style={styles.input}
          onChangeText={searchPhone} // Trigger searchPhone when input changes
         
        />
        <Text style={styles.tmessage}>{inputval}</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText} onPress={handleSearch}>ENDELEA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignitems:"space-between"

    // alignItems:'space-between'
  },
  tmessage: {
    position:'absolute',
    top:52,
    left:11,
    color:'#FF0000'
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
    marginTop:500
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
