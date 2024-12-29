import React,{ useState } from 'react';
import { StyleSheet, View, Text,TextInput,Button,Alert ,TouchableOpacity, Image,ScrollView,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


//   // Function to pick an image from files Photos
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 4],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setPassportImage(result.assets[0].uri);
//     }
//   };

//   // Function to take image
//   const takePhoto = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 4],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setPassportImage(result.assets[0].uri);
//     }
//   };
export default function Register({navigation}) {
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
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Register Form</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
        />
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
          style={styles.input}
          onPress={() => Alert.alert('Button!')}
          color="#007BFF" // Button color
        />
        <View style={styles.signupText}>
        <Text style={styles.message}>already have an account?   </Text>
        <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
          <Text style={styles.signupLink}>  login</Text>
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
    width: '95%', // Adjust card width as needed
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
    margin: 4,
    borderWidth: 1,
    padding: 10,
    borderRadius:3
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

});
