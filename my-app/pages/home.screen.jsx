import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Button from '../components/button.component';
import navBar from '../components/navbar.component';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GroupGrub</Text>
      <View style={styles.inputContainer}>
      <Image source={require('../logo/logo.png')} style={styles.logo}></Image>
        <Button
          text='Create an Account'
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
          textStyles={styles.text}
        ></Button>
        <Button
          text='Log in'
          onPress={() => navigation.navigate('Login')}
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
    color: '#265073',
  },
  inputContainer: {
    marginBottom: 20,
    flex: 1,
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
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default HomeScreen;