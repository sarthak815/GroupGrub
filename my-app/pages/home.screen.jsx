import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      <Button
        title='Go to NameInput'
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
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});