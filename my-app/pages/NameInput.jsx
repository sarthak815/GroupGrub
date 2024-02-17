import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

import Button from '../components/button.component';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="user"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="pass"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          text='Log in'
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
    backgroundColor: '#265174',
    padding: 15,
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