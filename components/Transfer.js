import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Transfer () {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hamisha Kwenda Namba ya Simu</Text>
      </View>

      {/* Recipient Info */}
      <View style={styles.recipientInfo}>
        <Text style={styles.recipientText}>
          Hamisha kwenda <Text style={styles.recipientNumber}>2556XXXXX</Text> 
          {' '}(<Text style={styles.recipientName}>NAOMI NICHOLAUS LEMA</Text>)
        </Text>
      </View>

      {/* Save Number */}
      <View style={styles.saveNumber}>
        <TextInput
          placeholder="namba ya simu"
          style={styles.input}
        />

        <TextInput
          placeholder="Kiasi"
          style={styles.input}
        />
      </View>

     
     
      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>ENDELEA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recipientInfo: {
    marginVertical: 20,
  },
  recipientText: {
    fontSize: 16,
    textAlign: 'center',
  },
  recipientNumber: {
    fontWeight: 'bold',
  },
  recipientName: {
    fontStyle: 'italic',
  },
  saveNumber: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  amountSection: {
    marginVertical: 20,
  },
  amountTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountError: {
    color: 'red',
    marginVertical: 5,
  },
  amountOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amountButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: '30%',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


