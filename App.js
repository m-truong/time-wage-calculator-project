/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
  }
})

// Note: In React-Native, must incase everything in a native <View> component containers 

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello World
      </Text>
      
    </View>
  )
}

export default App;
