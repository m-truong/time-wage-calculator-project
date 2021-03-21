/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';

// Note: Functions just like React 'Styled-Components'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // assign paddingTop 60px = height of <Header> component to clear the top
    paddingTop: 60,
    // justifyContent: 'center', 
    // alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 30
  },
  // Note: React-Native 'styles' attribute doesn't take units (e.g. px, em), just 100
  img: {
    width: 100,
    height: 100,
    // Gives rounded borders
    borderRadius: (100 / 2)
  }
})

// Note: In React-Native, must incase everything in a native <View> component containers 

const App = () => {


  const deleteItemHandler = (id) => {

  }

  const addItemHandler = (text) => {

  }

  return (
    <View style={styles.container}>
      {/* Note: Using 'props' to pass-down values makes components very reusable and modular. */}
      <Header title={"Time-2-Wage Calculator"} />

      <Image source={{ uri: 'https://www.randomuser.me/api/portraits/men/30.jpg' }} style={styles.img} />
    </View>
  )
}

export default App;
