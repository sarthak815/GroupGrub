import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Image, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Backend_Firebase/config';

import Button from '../components/button.component';

const Login = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const respondBack = () => { 
        if (userName.length === 0) {
            Alert.alert("Error", "Need to set UserName to more than 0 characters");
        } else if (password.length === 0) {
            Alert.alert("Error", "Need to set Password to more than 0 characters");
        } else {
            signInWithEmailAndPassword(auth, userName, password)
                .then((userCredential) => {
                    //setIsSignedIn(true);
                    //navigation.navigate("Introhome"); // Adjust the navigation route as necessary
                    navigation.navigate('Preferences')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorMessage = "Authentication failed";
                    if (errorCode === 'auth/user-not-found') {
                        errorMessage = "Email is not found";
                    } else if (errorCode === 'auth/wrong-password') {
                        errorMessage = "Password is Incorrect";
                    }
                    Alert.alert("Error", errorMessage);
                });
        }
    };

    const navReg = () => {
        navigation.navigate("Register"); // Adjust the navigation route as necessary
    };

    return (
        <View style={styles.container}>
            {/* <Image source={logo} style={styles.logo} /> */}

            <View style={styles.loginContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="User:"
                  placeholderTextColor="#265073" 
                  value={userName}
                  onChangeText={setUserName}
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
                  onPress={respondBack}
                    style={{
                      ...styles.button,
                      backgroundColor: (userName !== '' && password !== '') ? '#265073' : '#ccc',
                    }}
                    disabled={!(userName != '' && password != '')}
                    textStyles={styles.text}>
                      {/* <Image source={require('../icons/arrow.png')}></Image> */}
                </Button>
            </View>
            <Text style={styles.suggestionText}>
                Don't have an account?{" "}
                <Text onPress={navReg} style={styles.registerButton}>Register Here</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
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
  imgContainer: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
    suggestionText: {
      marginTop: 20,
  },
  registerButton: {
      color: 'blue',
  }
});

export default Login;