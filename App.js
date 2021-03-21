/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

// Note: Functions just like React 'Styled-Components'
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: 'darkslateblue', 
    fontSize: 30
  },
  // Note: React-Native 'styles' attribute doesn't take units (e.g. px, em), just 100
  img: {
    width: 100,
    height: 100,
    borderRadius: (100/2)
  }
})

// Note: In React-Native, must incase everything in a native <View> component containers 

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World
      </Text>
      <Image source={{uri: 'https://www.randomuser.me/api/portraits/men/3.jpg'}} style={styles.img}/> 
    </View>
  )
}

export default App;
