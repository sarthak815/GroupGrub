import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/home.screen';
import DetailsScreen from './pages/details.screen';
import NameInput from './pages/NameInput';
import Preferences from './pages/restrictions.screen';
import GroupIdGenerator from './components/GroupIdGenerator';
import QRCodeScannerComponent from './components/QRScan';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name='NameInput'
          component={NameInput}
          options={{ title: 'NameInput' }}
        />
        <Stack.Screen
          name='Preferences'
          component={Preferences}
          options={{ title: 'restrictions' }}
        />
        <Stack.Screen
          name='QR_Scan'
          component={GroupIdGenerator}
          options={{ title: 'QR_Scan' }}
        />
        <Stack.Screen
          name='Scan'
          component={QRCodeScannerComponent}
          options={{ title: 'Scan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});