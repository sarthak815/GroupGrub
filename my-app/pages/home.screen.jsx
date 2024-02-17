import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GroupGrub</Text>
      <View style={styles.inputContainer}>
        {/* <Image source=""></Image> */}
        <Button
          text='Create an Account / Log in'
          onPress={() => navigation.navigate('Preferences')}
          style={styles.button}
          textStyles={styles.text}
        >
          <Image source={require('../icons/arrow.png')}></Image>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#265073',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#265174',
    padding: 15,
    borderRadius: 15,
    margin: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  imgContainer: {
    alignItems: 'center',
  },
});

export default HomeScreen;