import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// import HelveticaText from './HelveticaText'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 16,
    },
    background1: {
        backgroundColor: '#E2CFE9',
        borderRadius: 20
    }
})


const TextField = ({ text }) => {
    return (
        <View style={styles.background1}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

TextField.defaultProps = {

}

export default TextField;
