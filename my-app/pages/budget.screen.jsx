import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { firebase, db, auth } from '../Backend_Firebase/config';
import { collection, addDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';

const Budget = ({ navigation }) => {
  const [cheap, setCheap] = useState(false);
  const [medium, setMedium] = useState(false);
  const [expensive, setExpensive] = useState(false);
  
  const addField = async() => {
    // const usr = auth.currentUser;
    // const todoRef = doc(db,'users', usr.uid); 
    let check = "";
    if(cheap){
      check += "$";
    }else if(medium){
      check += "$$";
    }else if(expensive){
      check += "$$$";
    }
    const user = auth.currentUser;
    if(user.uid){
      const ref = doc(db, "users", user.uid);
      await updateDoc(ref, {
        money: check,
      });
    }
    // console.log("5555555555")
    // await updateDoc(todoRef, {money: check}); 
    // console.log("6666666");
  }

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.title}>Please select your budget:</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='$'
                onPress={() => setCheap(!cheap)}
                style={cheap ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='$$'
                onPress={() => setMedium(!medium)}
                style={medium ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='$$$'
                onPress={() => setExpensive(!expensive)}
                style={expensive ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => { addField();
              navigation.navigate('GroupRec');}}/>
        </View>
    </View>
  );
};

export default Budget;

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