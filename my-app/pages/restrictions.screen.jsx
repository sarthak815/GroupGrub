import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';

const restrictions = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.text}>Welcome</Text>
        <Text>Please Select Food Preferences</Text>
        <View style={{ flexDirection:"row" }}>
            <Pressable>
                <Button
                    title='Vegetarian'
                    onPress={() => { pressed } }
                    style={styles.button}
                />
            </Pressable>
            <Button
                title='Vegan'
                style={styles.button}
            />
            <StatusBar style='auto' />
        </View>
    </View>
  );
};

export default restrictions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    height: '100%',
  },
  margin: {
    marginTop: 20,
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