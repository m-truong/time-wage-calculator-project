import React, { useContext } from 'react'
import { CalculatorContext } from "./Context.js"
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

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

const CalculateButton = ({ text, calculate }) => {
    const { wageState, expenseState, calculatorState } = useContext(CalculatorContext)
    const [hourlyWage, setHourlyWage] = wageState
    const [priceExpense, setPriceExpense] = expenseState
    const [calculator, setCalculator] = calculatorState

    const handleCalculate = (blah) => {
        let days;
        let hoursDiffDec;
        let hoursDiff;
        // Mins?
        // Secs?
        // If conditional to filter decimal using .join.split
        const value = (priceExpense / hourlyWage)
        // .toFixed() rounds to 2 significant figures
        const roundedSig = value.toFixed(2)
        console.log(`The roundedSigFigs is ${roundedSig}`)
        // Complex calculator state to determine days
        roundDays(roundedSig)

        setCalculator((prevState)=> {
            return { days: days, hours: hoursDiff, mins: 0, secs: 0 };
        })

    }

    // edge cases for decimals! 

    const roundDays = (parameter) => {
        // If roundedSig > 24 
        if (parameter > 24) {
            // take Difference 
            days = Math.trunc(parameter/24)
            console.log(`The number of days is ${days}`)
            hoursDiffDec = (parameter/24) - days
            console.log(`The number of hours remaining is ${hoursDiffDec}`)
            // then multiple by 24hrs/day
            hoursDiff = hoursDiffDec*24
            hoursDiff = Math.trunc(hoursDiff)
            console.log(`The number of hours remaining CONVERTED is ${hoursDiff}`)
        }
        return;
    }

    // need to filter the decimal points as well

    // Round to significant figures!

    return (
        // Note: ** Change this button prop to be **modular** and reusable for <CalculateButton> component
        <TouchableOpacity
            style={styles.btn}
            onPress={handleCalculate}
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