import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text,TextInput,Button,Alert,ActivityIndicator ,TouchableOpacity, Image,ScrollView,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// const cors = require('cors');
// app.use(cors());





export default function Register({navigation}) {
  const [loading, setLoading] = useState(false); 
  const [username,setUsername] = useState('');
  const [usermessage,setUsermessage] =useState('')  
    const [email,setEmail] = useState('');
    const [emailmessage,setMailmessage]= useState('')
    const [password,setPassword] = useState('');
    const [passwordMessage,setPasswordmessage]=useState()
    const [phone,setPhone] = useState('');
    const [phoneMessage,setPhonemessage]= useState('')

    const handleUsername =  (val)=>{
      setUsername(val)
      // Alert.alert(username)
      // console.log(username)
    }
    const handlePassword =  (val)=>{
           setPassword(val)
      
    }
    const handleEmail =  (val)=>{
      setEmail(val)
    }
    const handlePhone =  (val)=>{
      setPhone(val)
    }
    const [passportImage, setPassportImage] = useState(null);
     // Function to pick an image from files Photos
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setPassportImage(result.assets[0].uri);
    }
  };
 
  // Function to take image
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setPassportImage(result.assets[0].uri);
    }
  };



const submitsDetails = async () => {

  if(username=="" || password==" "|| phone ==" "||email==" "){
  if(!username)setUsermessage("Username not is empty")
  if(!emailmessage)setMailmessage("email not is empty")
  if(!phoneMessage)setPhonemessage("phone not is empty")
   if(!passwordMessage)setPasswordmessage("passord not is empty")
    
    // if(!username)setUsermessage("User name not is empty")

}else{}
  try { 
    const response = await axios.post(
      'http://51.20.248.109/:5000/app',
      {
        user_name: username, // Payload
        phone: phone,
        password: password,
        email: email,
        amount:10000
      },
      {
        headers: {
          'Content-Type': 'application/json', // Headers
        },
      }
    );

    
    if(response.status==200){
      console.log("dsds")
      navigation.navigate('Login')
    }


    // Clear the form (if needed)
    // setTitle('');
    // setBody('');
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
};

useEffect(()=>{
  setLoading(true);
})







  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Register Form</Text>
        <TextInput style={styles.input}
          placeholder="username"
          onChangeText={handleUsername}
        />
        <Text style={styles.tmessage}>{usermessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
           keyboardType="email-address"
        autoCapitalize="none"
          onChangeText={handleEmail}
        />
        <Text  style={styles.tmessage}>{emailmessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          onChangeText={handlePassword}
        />
        <Text  style={styles.tmessage}>{passwordMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="phone"
          onChangeText={handlePhone}
        />
        <Text  style={styles.tmessage}>{phoneMessage}</Text>
        <Text style={styles.label}>Passport Size Photo</Text>
         {passportImage && <Image source={{ uri: passportImage }} style={styles.passportImage} />}
         <View style={styles.buttonRow}>
           <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
             <Text style={styles.imageButtonText}>Upload from File</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageButton} onPress={takePhoto}>
             <Text style={styles.imageButtonText}>Camera</Text>
           </TouchableOpacity>
         </View>       
         <Button
          title="Submit"
          style={styles.signInButton}
          onPress={submitsDetails}
          color="#007BFF" // Button color
        />
        <View style={styles.signupText}>
        <Text style={styles.message}>already have an account?   </Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.signupLink}>  login</Text>
        </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.load} size="large" color="#0000ff" />
      ) : (
        <Button title="Register"  />
      )}
    </View>
  );
}

// in register


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center', // Centers vertically
        // alignItems: 'center', // Centers horizontally
        // backgroundColor: '#f5f5f5',
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 8,
        justifyContent: 'center',
      },
      load:{
        position:"absolute",
        top:400,
        left:150,
        width:100,
        
      },
      tmessage: {
        // position:'absolute',
        // top:52,
        // left:11,
        fontFamily:'san',
        fontWeight:"bold",
        paddingLeft:12,
        color:'#FF0000'
      },
      signInButton: {
        backgroundColor: '#FFD700',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 10,
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
    padding: 10 ,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

input: {
    // height: 40,
    margin: 4,
    // borderWidth: 1,
    padding: 10,
    // borderRadius:3
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 16,
  },
  message:{
    padding:5,
    textAlign:'center'

  },
  passportImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  imageButton: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  cardText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    padding:5
},
});
