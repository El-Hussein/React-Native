import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

export default class SplashScreen extends Component{
  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.text}> Computer Shop </Text>
        <ActivityIndicator color={'white'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    // backgroundColor: '#62AEFF'
    backgroundColor: '#CC542F'
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: "300",
  }
})