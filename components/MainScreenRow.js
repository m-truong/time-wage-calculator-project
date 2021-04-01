/* TODO: Having issues adding spacing between <Label> and <InputField>! */

import React from 'react'
import { CalculatorContext } from "./Context.js";
import { View, Text, StyleSheet } from 'react-native';
import MainScreenInputField from './MainScreenInputField'
import MainScreenLabel from './MainScreenLabel'

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
        // margin: 2,
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
})

const MainScreenRow = ({ text, word, width, dummyText, keyboard }) => {
    return (
        // Tip: Both components need to be nested inside <Text> component to display inline
        <View style={styles.container}>
            {/* TODO: Having issues adding spacing between <Label> and <InputField>! */}
            <Text>
                <MainScreenLabel
                    text={text}
                    word={word} />
                <MainScreenInputField
                    word={word}
                    width={width}
                    dummyText={dummyText}
                    keyboard={keyboard} />
            </Text>
        </View>
    )
}

MainScreenRow.defaultProps = {

}

export default MainScreenRow;