import React, { useState,useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
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
  const senderInfo =async ()=>{
    const token = await SecureStore.getItemAsync('userToken');
    console.log("jkjkkjkj")
 }
  useEffect(() => {
    
   
    senderInfo()
  const { user } = route.params;
  console.log(user[0].email)
  setPhone(user[0].phone)
  setUsername(user[0].username)
  setId(user[0]._id)


 
  },[])
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
        <Text style={styles.continueText}>ENDELEA</Text>
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
