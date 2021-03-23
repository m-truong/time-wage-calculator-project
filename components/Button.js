import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#8908B6',
        padding: 9,
        margin: 5,
        width: 125,
        height: 40,
        borderRadius: 12
    },
    btnText: {
        color: '#ffffff',
        fontSize: 19,
        textAlign: 'center',
    }
})

const Button = ({ text, navigation }) => {
    return (
        // Note: ** Change this button prop to be **modular** and reusable for <Button> component
        <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('InfoScreen') }}>
            <Text style={styles.btnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

Button.defaultProps = {

}


export default Button;