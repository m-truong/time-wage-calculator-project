import React, { useState, useContext } from 'react'
import { CalculatorContext } from "./Context.js";
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2CFE9',
        lineHeight: 23,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        textAlign: 'center',
        width: 120,
        height: 40,
    },
    text: {
        // Tip: Need '100%' width to expand inputField to container 
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        color: 'black',
        fontFamily: 'Courier New',
        fontSize: 16,
    },
})

const MainScreenInputField = ({ word, dummyText, keyboard, width }) => {
    const [state, setState] = word;
    const [temp, setTemp] = useState('');
    // Debug:
    console.log(`this console logs the MainScreenInputField state ${state}`)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholder={dummyText}
                placeholderTextColor="black"
                autoCompleteType='off'
                autoCorrect='false'
                keyboardType={keyboard}
                autoFocus={true}
                // ** TODO: React-Native keyboard would stay onFocus
                // ** Not an issue with changing Parent-State 
                // ** Must figure out why
                // onChangeText={setState}
                // value={state}
            ></TextInput>
        </View>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
