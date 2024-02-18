import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { firebase, db } from '../Backend_Firebase/config';
import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';


import Button from '../components/button.component';

const LoginScreen = ({ navigation }) => {
  const [addData, setAddData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const addField = () => {
    const todoRef = doc(db,'users', 'user-' + username); 
    const data = {
      name: username,
      password: password,
      veggie: false,
      vegan: false,
      dairyFree: false,
      keto: false,
      gf: false,
      pesketarian: false,
    };
    setDoc(todoRef, data); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="User:"
            placeholderTextColor="#265073" 
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Pass:"
            placeholderTextColor="#265073"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        <Button
          text='Log in'
          onPress={() => {username => setAddData(username); password => setAddData(password); addField(); navigation.navigate('Preferences', {username});}}
          style={{
            ...styles.button,
            backgroundColor: (username !== '' && password !== '') ? '#265073' : '#ccc',
          }}
          disabled={!(username != '' && password != '')}
          textStyles={styles.text}>
            <Image source={require('../icons/arrow.png')}></Image>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    fontSize: 20,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    width: 330,
    backgroundColor: '#F8FDED',
    color: '#265073',
  },
  button: {
    padding: 10,
    borderRadius: 15,
    margin: 15,
    marginTop: 28,
    width: 90,
  },
  text: {
    color: '#FEFFFD',
    textAlign: 'center',
    fontSize: 18,
  },
  imgContainer: {
    alignItems: 'center',
  },
});

export default LoginScreen;