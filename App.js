import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import { WelcomeScreen } from './screens/WelcomeScreen';

// Creates Stack
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'black',
    fontSize: 30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: (100 / 2)
  }
})

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
