import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imageButton.component';

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
                text='Vegetarian'
                onPress={() => setVeggie(true)}
                style={veggie ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Vegan'
                onPress={() => setVegan(true)}
                style={vegan ? styles.pressed : styles.button}
                textStyles={styles.text}
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
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => navigation.navigate('Preferences')}/>
        </View>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => navigation.navigate('Preferences')}/>
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
    backgroundColor: '#F9FBEF',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  imgContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#000000'
  }
});