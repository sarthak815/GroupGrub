import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const navBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <Image source={require('../icons/scanIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GroupRec')}>
          <Image source={require('../icons/groupIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../icons/profileIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ... other styles
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  icon: {
    width: 30, // Set the width as needed
    height: 30, // Set the height as needed
    resizeMode: 'contain',
    backgroundColor: '#265073',
  },
  // ... other styles
});

export default navBar;