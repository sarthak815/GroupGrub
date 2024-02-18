import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from '../components/button.component';
import ImageButton from '../components/imagebutton.component';
import { auth } from '../Backend_Firebase/config';

const restrictions = ({ navigation }) => {

  return (
    <View style={styles.container}>

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