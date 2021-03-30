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
        let days = 0;
        let hoursDiffDec = 0;
        let hoursDiff = 0;
        let mins = 0;
        let minsDiffDec = 0;
        // Secs?
        
        // If conditional to filter decimal using .join.split
        const value = (priceExpense / hourlyWage)
        // .toFixed() rounds to 2 significant figures
        const roundedSigHours = value.toFixed(2)
        console.log(`The roundedSigFigs is ${roundedSigHours}`)
        // Complex calculator state to determine days
        // roundDays(roundedSigHours)

        // If roundedSigHours > 24 // ** Only executes if hours over 24
        if (roundedSigHours > 24) {
            // take Difference 
            days = Math.trunc(roundedSigHours/24)
            console.log(`The number of days is ${days}`)
            hoursDiffDec = (roundedSigHours/24) - days
            console.log(`The number of hours remaining is ${hoursDiffDec}`)
            // then multiple by 24hrs/day
            hoursDiff = hoursDiffDec*24
            hoursDiff = Math.trunc(hoursDiff)
            console.log(`The number of hours remaining CONVERTED is ${hoursDiff}`)
        }

        // Catch if hours are over mins! 
        minsDiffDec = value - roundedSigHours
        // convert into 60mins/sec
        mins = minsDiffDec*60
        // Truncate the mins 
        mins = Math.trunc(mins)
        // Catches any hours not over 24! 
        hoursDiff = Math.trunc(roundedSigHours)

        setCalculator((prevState)=> {
            // ** TODO: stateData for hours not appearing in console! 
            return { days: days, hours: hoursDiff, mins: mins, secs: 0 };
        })

    }

    // edge cases for decimals

    const roundDays = (parameter) => {
        // If roundedSigHours > 24 
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
        // return;
    }

    // need to filter the decimal points as well

    // Round to significant figures

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