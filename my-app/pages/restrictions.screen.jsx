import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imageButton.component';

const restrictions = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.margin}></View>
        <Text style={styles.text}>Welcome</Text>
        <Text>Please Select Food Preferences</Text>
        <View style={{ flexDirection:"row" }}>
            <Pressable>
                <Button
                    text='Vegetarian'
                    onPress={() => { pressed } }
                    style={styles.button}
                    textStyles={styles.text}
                />
            </Pressable>
            <Button
                text='Vegan'
                style={styles.button}
                textStyles={styles.text}
            />
            <StatusBar style='auto' />
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