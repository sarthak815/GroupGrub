import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';

const restrictions = ({ navigation }) => {
  const [veggie, setVeggie] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [keto, setKeto] = useState(false);
;


  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.text}>Welcome</Text>
        <Text>Please Select your Food Preferences</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                title='Vegetarian'
                onPress={() => setVeggie(true)}
                style={veggie ? styles.pressed : styles.button}
            />
            <Button
                title='Vegan'
                onPress={() => setVegan(true)}
                style={vegan ? styles.pressed : styles.button}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                title='Dairy Free'
                onPress={() => setDairyFree(true)}
                style={dairyFree ? styles.pressed : styles.button}
            />
            <Button
                title='Keto'
                onPress={() => setKeto(true)}
                style={keto ? styles.pressed : styles.button}
            />
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
  pressed: {
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