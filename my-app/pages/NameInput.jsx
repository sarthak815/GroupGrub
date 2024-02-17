import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { firebase, db } from '../Backend_Firebase/config';
import { collection, addDoc } from 'firebase/firestore';


import Button from '../components/button.component';

const LoginScreen = ({ navigation }) => {
  const todoRef = collection(db,'users'); 
  const [addData, setAddData] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const addField = () => {
    const data = {
      name: username,
      password: password,
    };
    addDoc(todoRef, data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {username != '' && password != '' && <Button
          text='Log in'
          onPress={() => {username => setAddData(username); password => setAddData(password); addField(); navigation.navigate('Preferences');}}
          style={styles.button}
          textStyles={styles.text}>
            <Image source={require('../icons/arrow.png')}></Image>
        </Button> }
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
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    margin: 15,
  },
  text: {
    color: '#fff',
  },
  imgContainer: {
    alignItems: 'center',
  },
});

export default LoginScreen;