import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { firebase, db } from '../Backend_Firebase/config';
import { collection, addDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';

const restrictions = ({ navigation, uid }) => {
  const [veggie, setVeggie] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [halal, setHalal] = useState(false);
  const [gf, setGF] = useState(false);
  
  const addArray = () => {

    let restrictionsArr = [];
    if(veggie){
      restrictions.push('veggie');
    }
    if(vegan){
      restrictions.push('vegan');
    }
    if(kosher){
      restrictions.push('kosher');
    }
    if(halal){
      restrictions.push('halal');
    }
    if(gf){
      restrictions.push('gluten free');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.title}>Please Select your Food Preferences:</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Vegetarian'
                onPress={() => setVeggie(!veggie)}
                style={veggie ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Vegan'
                onPress={() => setVegan(!vegan)}
                style={vegan ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Kosher'
                onPress={() => setKosher(!kosher)}
                style={kosher ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Halal'
                onPress={() => setHalal(!halal)}
                style={halal ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Gluten Free'
                onPress={() => setGF(!gf)}
                style={gf ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => {submitRestrictions();
            navigation.navigate('CuisineRec')}}/>
        </View>
    </View>
  );
};

export default restrictions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFFFD',
    alignItems: 'center',
    height: '100%',
    paddingTop: 50,
  },
  title: {
    fontSize: 27,
    marginBottom: 30,
    color: '#265073',
  },
  margin: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: '#000000'
  },
  button: {
    backgroundColor: '#F9FBEF',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  imgContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  pressed: {
    borderColor: '#9AD0C2',
    backgroundColor: '#F9FBEF',
    borderWidth: 2.5,
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});