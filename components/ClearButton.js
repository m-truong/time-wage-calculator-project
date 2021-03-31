import React, { useContext } from 'react'
import { CalculatorContext } from "./Context.js"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        // backgroundColor: '#8908B6',
        // borderRadius: 12,
        padding: 9,
        // margin: 5,
        // width: 12,
        // height: 12,
        // Tip: Use alignSelf
        alignSelf: 'flex-end',
    },
    btnText: {
        color: 'black',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontFamily: 'Helvetica',
        textAlign: 'center',
    }
})

const ClearButton = () => {
    const { wageState, expenseState, labelState, calculatorState } = useContext(CalculatorContext)
    const [hourlyWage, setHourlyWage] = wageState
    const [priceExpense, setPriceExpense] = expenseState
    const [label, setLabel] = labelState
    const [calculator, setCalculatorState] = calculatorState

    const clearStateHandler = () => {
        
    }

    // Continue TODO: ** Clear state!
    return (
        <TouchableOpacity
            style={styles.btn}
            // onPress={}
        >
            <Text style={styles.btnText}>Clear</Text>
        </TouchableOpacity>
    )
}

ClearButton.defaultProps = {

}

export default ClearButton;
