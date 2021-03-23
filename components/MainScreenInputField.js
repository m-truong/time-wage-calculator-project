import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2CFE9',
        padding: 10,
        // justifyContent: 'space-between',
        textAlign: 'center',
        // margin: 10,
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
})

const MainScreenInputField = () => {
    return (
        // <Text>$ </Text>
        <TouchableOpacity style={styles.container}>
           <TextInput />
        </TouchableOpacity>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
