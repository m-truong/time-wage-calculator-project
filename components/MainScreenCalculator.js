import React, { useContext } from 'react'
import { CalculatorContext } from "./Context.js"
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C8F0CD',
        padding: 20,
        width: 320,
        height: 125,
        textAlign: 'center',
        // Tip: Don't need flex to justifyContent**
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nested: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
        fontSize: 38,
        fontFamily: 'Courier New',
    },
    label: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Courier New',

    }
})

const MainScreenCalculator = () => {
    // Peak into state to display 
    const { calculatorState } = useContext(CalculatorContext)
    const [calculator, setCalculator] = calculatorState
    const { days, hours, mins, secs } = calculator
    console.log(`Does this console.log ${days}`)
    console.log(`Does this console.log ${hours}`)
    console.log(`Does this console.log ${mins}`)
    console.log(`Does this console.log ${secs}`)
    // this is undefined 
    
    return (
        <View style={styles.container}>
            <View style={styles.nested}>
                <Text style={styles.text}>{!days ? `00` : days}</Text>
                <Text style={styles.label}>DAYS</Text>
            </View>
            <Text style={styles.text}>:</Text>
            <View style={styles.nested}>
                <Text style={styles.text}>{!hours ? `00` : hours}</Text>
                <Text style={styles.label}>HOURS</Text>
            </View>
            <Text style={styles.text}>:</Text>
            <View style={styles.nested}>
                <Text style={styles.text}>{!mins ? `00` : mins}</Text>
                <Text style={styles.label}>MINS</Text>
            </View>
        </View>
    )
}

MainScreenCalculator.defaultProps = {
    one: `00`,
    two: `00`,
    three: `00`,
}

export default MainScreenCalculator;
