import React from 'react'
import { CalculatorContext } from "./Context.js"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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

const ClearButton = () => {
    const { calculatorState } = useContext(CalculatorContext)
    return (
        <TouchableOpacity >
            
        </TouchableOpacity>
    )
}

ClearButton.defaultProps = {

}

export default ClearButton;
