import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Note: Functions just like React 'Styled-Components'
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#8908B6',
    },
    text: { 
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
})

// Note: In React-Native, must incase everything in a native <View> component containers 

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

// Tip: Assign defaultProps to <Header> component 
// If no props passed down, from topmost component, all {attributes} default 
// to values on this object
Header.defaultProps = {
    title: 'Default Title'
}

export default Header;
