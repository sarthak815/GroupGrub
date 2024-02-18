import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { auth } from '../Backend_Firebase/config';

import { firebase, db } from '../Backend_Firebase/config';
import { collection, addDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';

const CuisineRec = ({ navigation }) => {
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
    let restrictionsArr = "";
    if(mediterranean){
      restrictionsArr += ' mediterranean';
    }
    if(japanese){
      restrictionsArr += ' japanese';
    }
    if(korean){
      restrictionsArr += ' korean';
    }
    if(vietnamese){
      restrictionsArr += ' vietnamese';
    }
    if(mexican){
      restrictionsArr += ' mexican';
    }
    if(italian){
      restrictionsArr += ' italian';
    }
    if(indian){
      restrictionsArr += ' indian';
    }
    if(american){
      restrictionsArr += ' american';
    }
    if(french){
      restrictionsArr += ' french';
    }
    if(hawaiian){
      restrictionsArr += ' hawaiian';
    }
    if(jamaican){
      restrictionsArr += ' jamaican';
    }
    if(irish){
      restrictionsArr += ' irish';
    }
    if(turkish){
      restrictionsArr += ' turkish';
    }
    if(chinese){
      restrictionsArr += ' chinese';
    }
    const user = auth.currentUser;
    if(user.uid){
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        cuisine: restrictionsArr,
      });
    }
    navigation.navigate("FoodRec");
  }
  // const addArray = () => {

  

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
<<<<<<< Updated upstream
            onPress={() => navigation.navigate('FoodRec')}/> 
=======
            onPress={() => handleImageButtonPress()}/> 
>>>>>>> Stashed changes
        </View>
    </View>
  );
};

export default CuisineRec;

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