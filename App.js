/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
// import { uuid } from 'uuidv4';

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
  const [items, setItems] = useState([
    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Coffee' },
    { id: Math.random(), text: 'Bagel' },
    { id: Math.random(), text: 'Bread' },
  ])

  return (
    <View style={styles.container}>
      {/* Note: Using 'props' to pass-down values makes components very reusable and modular. */}
      <Header title={"Time-2-Wage Calculator"} />
      <FlatList
        // Tip: hard-coded 'data' array property on <FlatList> component
        data={items}
        // Tip: renderItem hard-coded function 
        renderItem={({ item }) => <ListItem item={item}/>}
      />
      <Image source={{ uri: 'https://www.randomuser.me/api/portraits/men/3.jpg' }} style={styles.img} />
    </View>
  )
}

export default App;
