import React from 'react'
import { CalculatorContext } from "./Context.js"
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 19,
        paddingRight: 10,
    },
})

const MainScreenLabel = ({ text }) => {
    return (
            <Text style={styles.text}>
                {text}
            </Text>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;