// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
// import { firebase, db } from '../Backend_Firebase/config';
// import { collection, addDoc } from 'firebase/firestore';
// import { signInWithEmailAndPassword } from "firebase/auth";


// import Button from '../components/button.component';

// const LoginScreen = ({ navigation }) => {

//   const todoRef = collection(db,'users'); 
//   const [addData, setAddData] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   const addField = () => {
//     const data = {
//       name: username,
//       password: password,
//     };
//     addDoc(todoRef, data);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.loginContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="User:"
//             placeholderTextColor="#265073" 
//             value={username}
//             onChangeText={setUsername}
//             autoCapitalize="none"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Pass:"
//             placeholderTextColor="#265073"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//           />
//         <Button
//           text='Log in'
//           onPress={() => {username => setAddData(username); password => setAddData(password); addField(); navigation.navigate('Preferences');}}
//           style={{
//             ...styles.button,
//             backgroundColor: (username !== '' && password !== '') ? '#265073' : '#ccc',
//           }}
//           disabled={!(username != '' && password != '')}
//           textStyles={styles.text}>
//             <Image source={require('../icons/arrow.png')}></Image>
//         </Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   loginContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     fontSize: 20,
//     height: 40,
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 10,
//     width: 330,
//     backgroundColor: '#F8FDED',
//     color: '#265073',
//   },
//   button: {
//     padding: 10,
//     borderRadius: 15,
//     margin: 15,
//     marginTop: 28,
//     width: 90,
//   },
//   text: {
//     color: '#FEFFFD',
//     textAlign: 'center',
//     fontSize: 18,
//   },
//   imgContainer: {
//     alignItems: 'center',
//   },
// });

// export default LoginScreen;

import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Backend_Firebase/config';

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
                    placeholder='Enter Username'
                    style={styles.textInput}
                    onChangeText={setUserName}
                    value={userName}
                />
                <TextInput
                    placeholder='Enter Password'
                    style={styles.textInput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <Button title="Submit" onPress={respondBack} />
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
    },
    loginContainer: {
        width: '80%',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        paddingHorizontal: 10,
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