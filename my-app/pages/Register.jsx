import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Backend_Firebase/config';
import { doc, setDoc } from 'firebase/firestore';
 // Ensure these imports are set up correctly for React Native

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');

  function changeEmail(value){
    setEmail(value);
  }
  function changePassword(value){
    setPassword(value);
  }
  function changeConfirmPassword(value){
    setConfirmPassword(value);
  }

  function registerUser(){

    if (email.length === 0) {
      setErrorMessage("Email not entered");
    }
    else if (password.length === 0 || confirmPassword.length === 0){
      setErrorMessage("Password not entered");
    }
    else if (password !== confirmPassword){
      setErrorMessage("Please double check password");
    }
    else{
      const data = {
        name: name,
      };
      const todoRef = doc(db,'userInfo', userCredential); 
      setDoc(todoRef, data);
      createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        const user = userCredential.user;
        // setIsSignedIn(true);
        // Navigate to the setup screen
        navigation.navigate('Login');
      }).catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode === 'auth/email-already-in-use' ? "The email is already in use" : "This is an invalid email");
      });
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Name'
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder='Email'
        style={styles.textInput}
        onChangeText={changeEmail}
        value={email}
      />
      <TextInput
        placeholder='Password'
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={changePassword}
        value={password}
      />
      <TextInput
        placeholder='Confirm password'
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={changeConfirmPassword}
        value={confirmPassword}
      />
      <Button title="Register here !" onPress={registerUser} />
      {errorMessage ? <Text> Error: {errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default Register;
