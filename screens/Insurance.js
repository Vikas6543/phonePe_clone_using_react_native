import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Insurance = () => {
  return (
    <View style={myStyles.container}>
      <Text style={myStyles.text}>Insurance</Text>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});

export default Insurance;
