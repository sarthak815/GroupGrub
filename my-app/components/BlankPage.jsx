import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlankPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is a blank page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BlankPage;
