import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';

const restrictions = ({ navigation }) => {
  //const [veggie, setVegie] = useState('');
  var vegie = false, vegan = false, dairyFree = false, keto = false, glutenFree = false, 
  noChick = false, noBeef = false, noPork = false, noFish = false;


  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.text}>Welcome</Text>
        <Text>Please Select your Food Preferences</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                title='Vegetarian'
                onPress={() => vegie = true}
                style={vegie ? styles.unpress : styles.button}
            />
            <Button
                title='Vegan'
                onPress={() => (vegan = true)}
                style={styles.button}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                title='Dairy Free'
                style={styles.button}
            />
            <Button
                title='Keto'
                style={styles.button}
            />
        </View>
    </View>
  );
  console.log(vegan);
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
  unpress: {
    backgroundColor: '#e3ebdd',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    
  },
  button: {
    backgroundColor: '#4fb489',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    
  },
});