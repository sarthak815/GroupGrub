import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/home.screen';
import DetailsScreen from './pages/details.screen';
import NameInput from './pages/NameInput';
import Restrictions from './pages/restrictions.screen';
import CuisineRec from './pages/cuisineRec.screen';
import FoodRec from './pages/foodRec.screen';
import GroupRec from './pages/groupRec.screen';
import Profile from './pages/profile.screen';
import Scan from './pages/scan.screen';

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
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='Restrictions'
          component={Restrictions}
          options={{ title: 'Restrictions' }}
        />
        <Stack.Screen
          name='GroupRec'
          component={GroupRec}
          options={{ title: 'Group Recommendation' }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name='Scan'
          component={Scan}
          options={{ title: 'Scanner' }}
        />
        <Stack.Screen
          name='CuisineRec'
          component={CuisineRec}
          options={{ title: 'Cuisine' }}
        />
        <Stack.Screen
          name='FoodRec'
          component={FoodRec}
          options={{ title: 'Food Preference' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFFFD',
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