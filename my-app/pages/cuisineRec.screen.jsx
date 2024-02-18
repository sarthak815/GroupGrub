import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { auth } from '../Backend_Firebase/config';
import { doc, setDoc } from 'firebase/firestore';

const restrictions = ({ navigation }) => {
  const [mediterranean, setMediterranean] = useState(false);
  const [japanese, setJapanese] = useState(false);
  const [korean, setKorean] = useState(false);
  const [vietnamese, setVietnamese] = useState(false);
  const [mexican, setMexican] = useState(false);
  const [italian, setItalian] = useState(false);
  const [indian, setIndian] = useState(false);
  const [american, setAmerican] = useState(false);
  const [french, setFrench] = useState(false);
  const [hawaiian, setHawaiian] = useState(false);
  const [jamaican, setJamaican] = useState(false);
  const [irish, setIrish] = useState(false);
  const [turkish, setTurkish] = useState(false);
  const [chinese, setChinese] = useState(false);

  const handleImageButtonPress = async() => {
    // Create an array of all cuisines with their state
    const cuisineStates = [
      { name: 'Mediterranean', state: mediterranean },
      { name: 'Japanese', state: japanese },
      { name: 'Korean', state: korean },
      { name: 'Vietnamese', state: vietnamese },
      { name: 'Mexican', state: mexican },
      { name: 'Italian', state: italian },
      { name: 'Indian', state: indian },
      { name: 'American', state: american },
      { name: 'French', state: french },
      { name: 'Hawaiian', state: hawaiian },
      { name: 'Jamaican', state: jamaican },
      { name: 'Irish', state: irish },
      { name: 'Turkish', state: turkish },
      { name: 'Chinese', state: chinese },
    ];

    // Filter the array to only include the cuisines that are selected (true)
    const selectedCuisines = cuisineStates.filter(cuisine => cuisine.state).map(cuisine => cuisine.name);

    // Join the selected cuisines into a string
    const selectedCuisinesString = selectedCuisines.join(', ');

    const user = auth.currentUser;
    if(user){
      const userDocRef = doc(db, "users", user.uid);
      console.log("okk")
      await updateDoc(userDocRef, {
        navigate: selectedCuisinesString,
      });
    }

    // Navigate to the FoodRec screen with the selectedCuisinesString as a parameter
    navigation.navigate('FoodRec', { selectedCuisines: selectedCuisinesString });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.title}>Please Select your Cuisine Preferences:</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Mediterranean'
                onPress={() => setMediterranean(!mediterranean)}
                style={mediterranean ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Japanese'
                onPress={() => setJapanese(!japanese)}
                style={japanese ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Korean'
                onPress={() => setKorean(!korean)}
                style={korean ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Vietnamese'
                onPress={() => setVietnamese(!vietnamese)}
                style={vietnamese ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Indian'
                onPress={() => setIndian(!indian)}
                style={indian ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Mexican'
                onPress={() => setMexican(!mexican)}
                style={mexican ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Italian'
                onPress={() => setItalian(!italian)}
                style={italian ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='American'
                onPress={() => setAmerican(!american)}
                style={american ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='French'
                onPress={() => setFrench(!french)}
                style={french ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Hawaiian'
                onPress={() => setHawaiian(!hawaiian)}
                style={hawaiian ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Jamaican'
                onPress={() => setJamaican(!jamaican)}
                style={jamaican ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Irish'
                onPress={() => setIrish(!irish)}
                style={irish ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Turkish'
                onPress={() => setTurkish(!turkish)}
                style={turkish ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Chinese'
                onPress={() => setChinese(!chinese)}
                style={chinese ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => handleImageButtonPress}/> 
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