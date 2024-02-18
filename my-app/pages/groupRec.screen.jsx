import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';
import { db } from '../Backend_Firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { Button } from 'react-native';

import Card from '../components/restaurantCard.component';

const App = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Card restaurant="BIRD DOG" address="420 Ramona St." rating={4.4}/>
      <Card restaurant="Evvia Estiatorio" address="420 Emerson St." rating={4.6}/>
      <Card restaurant="Teleferic Barcelona Palo" address="855 El Camino Real #130" rating={4.5}/>
      <Button
        title='Creating QR Code'
        onPress={() => navigation.navigate('QR_Generate')}
        style={styles.button}
      />
      <Button
        title='Scanning QR Code'
        onPress={() => navigation.navigate('QR_Scanner')}
        style={styles.button}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 30
  },
  button: {
    backgroundColor: '#4fb489',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

export default App;