import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';

const restrictions = ({ navigation }) => {
  const [pizza, setPizza] = useState(false);
  const [sandwich, setSandwich] = useState(false);
  const [seafood, setSeafood] = useState(false);
  const [noodles, setNoodles] = useState(false);
  const [ramen, setRamen] = useState(false);
  const [tacos, setTacos] = useState(false);
  const [wine, setWine] = useState(false);
  const [barbeque, setBarbeque] = useState(false);
  const [salad, setSalad] = useState(false);
  const [dimsum, setDimsum] = useState(false);
  const [burger, setBurger] = useState(false);
  const [bagels, setBagels] = useState(false);
  const [kebab, setKebab] = useState(false);
  const [coffee, setCoffee] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [cocktails, setCocktails] = useState(false);
  const [soup, setSoup] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.title}>What do you feel like eating today?</Text>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Pizza'
                onPress={() => setPizza(!pizza)}
                style={pizza ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Sandwich'
                onPress={() => setSandwich(!sandwich)}
                style={sandwich ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Seafood'
                onPress={() => setSeafood(!seafood)}
                style={seafood ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Noodles'
                onPress={() => setNoodles(!noodles)}
                style={noodles ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Ramen'
                onPress={() => setRamen(!ramen)}
                style={ramen ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Tacos'
                onPress={() => setTacos(!tacos)}
                style={tacos ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Wine'
                onPress={() => setWine(!wine)}
                style={wine ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Barbeque'
                onPress={() => setBarbeque(!barbeque)}
                style={barbeque ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Salad'
                onPress={() => setSalad(!salad)}
                style={salad ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Dim Sum'
                onPress={() => setDimsum(!dimsum)}
                style={dimsum ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Burger'
                onPress={() => setBurger(!burger)}
                style={burger ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Bagels'
                onPress={() => setBagels(!bagels)}
                style={bagels ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Kebab'
                onPress={() => setKebab(!kebab)}
                style={kebab ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Coffee'
                onPress={() => setCoffee(!coffee)}
                style={coffee ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Dessert'
                onPress={() => setDessert(!dessert)}
                style={dessert ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <StatusBar style='auto' />
        <View style={{ flexDirection:"row" }}>
            <Button
                text='Cocktails'
                onPress={() => setCocktails(!cocktails)}
                style={cocktails ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
            <Button
                text='Soup'
                onPress={() => setSoup(!soup)}
                style={soup ? styles.pressed : styles.button}
                textStyles={styles.text}
            />
        </View>
        <View style={styles.imgContainer}>
          <ImageButton
            source={require('../icons/nextIcon.png')}
            onPress={() => navigation.navigate('GroupRec')}/>
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
    marginBottom: 20,
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