import React, { useState } from 'react'
import { CalculatorContext } from "../components/Context.js"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MainScreenRow from '../components/MainScreenRow'
import MainScreenCalculator from '../components/MainScreenCalculator'
import CalculateButton from '../components/CalculateButton'
import { ClearButton as Clear } from '../components/ClearButton'

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
    // Tip: Continue *** Adding useState functionality ***
    // Tip: useState complex object 
    const [hourlyWage, setHourlyWage] = useState(0)
    const [priceExpense, setPriceExpense] = useState(0)
    const [calculator, setCalculator] = useState({ days: 0, hours: 0, mins: 0 })
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
                    word={wageState}
                    dummyText={"0.00"}
                    keyboard={"numeric"}
                    width={20} />
                <MainScreenRow
                    text={"Price of Expense"}
                    word={expenseState}
                    dummyText={"0.00"}
                    keyboard={"numeric"}
                    width={20} />
                <MainScreenRow
                    text={"Label"}
                    word={labelState}
                    dummyText={"New item"}
                    keyboard={"default"}
                    width={20} />
                {/* Add diff Button component with onPress to pass down data; not navigate */}
                <CalculateButton
                    text={"Calculate"}
                    word={calculatorState} />
                <ClearButton
                    style={{ alignSelf: 'flex-end' }}
                >
                    Clear
                </ClearButton>
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
