import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/home.screen';
import DetailsScreen from './pages/details.screen';
import NameInput from './pages/NameInput';
<<<<<<< Updated upstream
import Restrictions from './pages/restrictions.screen';
=======
>>>>>>> Stashed changes
import CuisineRec from './pages/cuisineRec.screen';
import FoodRec from './pages/foodRec.screen';
import GroupRec from './pages/groupRec.screen';
import Profile from './pages/profile.screen';
import Scan from './pages/scan.screen';
import GroupIdGenerator from './components/GroupIdGenerator';
import QRCodeScanner from './components/QRScan';
import { ListMembers } from './components/ListComponents';
import Register from './pages/Register';
import Login from './pages/NameInput';
import BlankPage from './components/BlankPage';
import Budget from './pages/budget.screen';
import Restrictions from './pages/restrictions.screen';

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
          name='Login'
          component={Login}
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
          name='QR_Scanner'
          component={QRCodeScanner}
          options={{ title: 'QR_Scanner' }}
        />
        <Stack.Screen
          name='QR_Generate'
          component={GroupIdGenerator}
          options={{ title: 'QR_Generate' }}
        />
        <Stack.Screen
          name='List_Groups'
          component={ListMembers}
          options={{ title: 'List_Groups' }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name='BlankPage'
          component={BlankPage}
          options={{ title: 'BlankPage'}}
        />
        <Stack.Screen name='CuisineRec'
          component={CuisineRec}
          options={{ title: 'Cuisine' }}
        />
        <Stack.Screen
          name='FoodRec'
          component={FoodRec}
          options={{ title: 'FoodRec' }}
        />
        <Stack.Screen
          name='GroupIdGenerator'
          component={GroupIdGenerator}
          options={{ title: 'GroupIdGenerator' }}
        />
        <Stack.Screen
          name='Budget'
          component={Budget}
          options={{ title: 'Budget' }}
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