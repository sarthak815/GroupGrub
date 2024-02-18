import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/button.component';
import { db } from '../Backend_Firebase/config';
import { getDocs, collection } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Group Grub</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      <Button
        title='Create an Account / Log In'
        onPress={() => navigation.navigate('NameInput')}
        style={styles.button}
      />
      <Button
        title='Creating QR Code'
        onPress={() => navigation.navigate('QR_Scan')}
        style={styles.button}
      />
      <Button
        title='Scanning QR Code'
        onPress={() => navigation.navigate('Scan')}
        style={styles.button}
      />
      <StatusBar style='auto' />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 30
  },
  button: {
    backgroundColor: '#4fb489',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});