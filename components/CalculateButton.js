import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#8908B6',
        borderRadius: 12,
        padding: 9,
        margin: 5,
        width: 125,
        height: 40,
        // Tip: Use alignSelf
        alignSelf: 'flex-end',
    },
    btnText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    }
})

const CalculateButton = ({ text, navigation, screen, calculate }) => {
    return (
        // Note: ** Change this button prop to be **modular** and reusable for <CalculateButton> component
        <TouchableOpacity style={styles.btn}
            // onPress={}
        >
            <Text style={styles.btnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

CalculateButton.defaultProps = {

}


export default CalculateButton;