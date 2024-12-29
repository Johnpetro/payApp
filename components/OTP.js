import React from 'react';
import { StyleSheet, View, Text,TextInput,Button,Alert } from 'react-native';

export default function OTPForm() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>OTP</Text>
        <TextInput
          style={styles.input}
          placeholder="OTP"
        />
         <Button
          title="Submit"
          style={styles.input}
          onPress={() => Alert.alert('Button!')}
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
