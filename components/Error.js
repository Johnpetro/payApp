import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ErrorScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/595/595067.png',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Oops! Something went wrong.</Text>
      <Text style={styles.message}>
        We encountered an error. Please try again later.
      </Text>
      <Button title="Retry"  onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ErrorScreen;
