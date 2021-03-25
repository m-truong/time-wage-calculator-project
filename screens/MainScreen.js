import React, { useState } from 'react'
import { CalculatorContext } from "../components/Context.js"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MainScreenRow from '../components/MainScreenRow';
import MainScreenCalculator from '../components/MainScreenCalculator';
import CalculateButton from '../components/CalculateButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    text: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Helvetica',
        marginVertical: 10,
    },
    img: {
        width: 100,
        height: 100,
    }
})

const MainScreen = ({ navigation, screen }) => {
    // Tip: Continue *** Adding useState functionality! ***
    // Tip: useState complex object 
    const [hourlyWage, setHourlyWage] = useState(0)
    const [priceExpense, setPriceExpense] = useState(0)
    const [calculator, setCalculator] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
    const [label, setLabel] = useState("New item")

    const wageState = [hourlyWage, setHourlyWage]
    const expenseState = [priceExpense, setPriceExpense]
    const calculatorState = [calculator, setCalculator]
    const labelState = [label, setLabel]

    return (
        <CalculatorContext.Provider value={{
            wageState: wageState,
            expenseState: expenseState,
            labelState: labelState,
            calculatorState: calculatorState
        }}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        style={{ marginLeft: 330 }}
                        source={require('../res/images/informationCircle.png')} />
                </TouchableOpacity>
                <MainScreenRow
                    text={"Hourly Wage"}
                    word={wageState} />
                <MainScreenRow
                    text={"Price of Expense"}
                    width={20}
                    word={expenseState} />
                <MainScreenRow
                    text={"Label"}
                    width={20}
                    word={labelState} />
                {/* Add diff Button component with onPress to pass down data; not navigate */}
                <CalculateButton
                    text={"Calculate"}
                    word={calculatorState} />
                <Text
                    style={{ alignSelf: 'flex-end' }}
                >
                    Clear
                </Text>
                <Text style={styles.text}>
                    {labelState} costs
            </Text>
                <MainScreenCalculator />
                <Text style={styles.text}>
                    of your life to earn.
                </Text>
                <Image
                    source={require('../res/images/calculatingImage.png')}
                />
            </View>
        </CalculatorContext.Provider>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
