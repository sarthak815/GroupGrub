import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';

const restrictions = ({ navigation }) => {
  const [veggie, setVeggie] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [keto, setKeto] = useState(false);
  const [gf, setGF] = useState(false);
  const [pesketarian, setPesketarian] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.title}>Please Select your Food Preferences:</Text>
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
                text='Dairy Free'
                onPress={() => setDairyFree(true)}
                style={dairyFree ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Keto'
                onPress={() => setKeto(true)}
                style={keto ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Gluten Free'
                onPress={() => setGF(true)}
                style={gf ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Pesketarian'
                onPress={() => setPesketarian(true)}
                style={pesketarian ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
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
    backgroundColor: '#FEFFFD',
    alignItems: 'center',
    height: '100%',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
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
    // borderWidth: 2,
    // borderColor: '#265073',
    margin: 10,
    justifyContent: 'flex-end'
  },
  imgContainer: {
    alignItems: 'center',
  },
  pressed: {
    borderColor: '#9AD0C2',
    backgroundColor: '#F9FBEF',
    borderWidth: 2.5,
    padding: 10,
    borderRadius: 15,
    margin: 10,
    justifyContent: 'flex-end',
  },
});