import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { auth } from '../Backend_Firebase/config';
import { doc, setDoc } from 'firebase/firestore';

import { firebase, db } from '../Backend_Firebase/config';
import { collection, addDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';

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

  const addArray = () => {

    let restrictionsArr = [];
    if(mediterranean){
      restrictions.push('mediterranean');
    }
    if(japanese){
      restrictions.push('japanese');
    }
    if(korean){
      restrictions.push('korean');
    }
    if(vietnamese){
      restrictions.push('vietnamese');
    }
    if(mexican){
      restrictions.push('mexican');
    }
    if(italian){
      restrictions.push('italian');
    }
    if(indian){
      restrictions.push('indian');
    }
    if(american){
      restrictions.push('american');
    }
    if(french){
      restrictions.push('french');
    }
    if(hawaiian){
      restrictions.push('hawaiian');
    }
    if(jamaican){
      restrictions.push('jamaican');
    }
    if(irish){
      restrictions.push('irish');
    }
    if(turkish){
      restrictions.push('turkish');
    }
    if(chinese){
      restrictions.push('chinese');
    }
  }
  

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