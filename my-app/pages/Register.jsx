import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Backend_Firebase/config';
import { doc, setDoc } from 'firebase/firestore';
 // Ensure these imports are set up correctly for React Native

 import Button from '../components/button.component';

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
      <View style={styles.loginContainer}>
        <TextInput
          placeholder='Name:'
          placeholderTextColor="#265073" 
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder='Email:'
          placeholderTextColor="#265073" 
          style={styles.input}
          onChangeText={changeEmail}
          value={email}
        />
        <TextInput
          placeholder='Password:'
          placeholderTextColor="#265073" 
          style={styles.input}
          secureTextEntry={true}
          onChangeText={changePassword}
          value={password}
        />
        <TextInput
          placeholder='Confirm password:'
          placeholderTextColor="#265073" 
          style={styles.input}
          secureTextEntry={true}
          onChangeText={changeConfirmPassword}
          value={confirmPassword}
        />
        <Button
          text="Sign up"
          onPress={registerUser}
            style={{
              ...styles.button,
              backgroundColor: (email !== '' && password !== '') ? '#265073' : '#ccc',
            }}
            disabled={!(email != '' && password != '')}
            textStyles={styles.text}>
              {/* <Image source={require('../icons/arrow.png')}></Image> */}
        </Button>
      </View>
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
  loginContainer: {
    marginBottom: 20,
    alignItems: 'center',
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
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    margin: 15,
    marginTop: 28,
    width: 90,
  },
  text: {
    color: '#fff',
    color: '#FEFFFD',
    textAlign: 'center',
    fontSize: 18,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
},
});

export default Register;
