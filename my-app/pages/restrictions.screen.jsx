import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text>Please Select Food Preferences</Text>
      <Button
        title='Vegetarian'
        style={styles.button}
      />
      <Button
        title='Create an Account / Log In'
        onPress={() => navigation.navigate('NameInput')}
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