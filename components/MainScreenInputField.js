import React, { useState, useContext } from 'react'
import { CalculatorContext } from "./Context.js";
import { View, StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2CFE9',
        paddingHorizontal: 10,
        width: 120,
        height: 40,
    },
    text: {
        // Tip: Need '100%' width to expand inputField to container 
        width: '100%',
        height: '100%',
        color: 'black',
        fontFamily: 'Courier New',
        fontSize: 16,
    },
    // dollarSize: {
    //     fontSize: 18,
    //     paddingRight: 8,
    //     paddingBottom: 6,
    // }
})

const MainScreenInputField = ({ word, dummyText, keyboard, width }) => {
    const [state, setState] = word;
    // const [temp, setTemp] = useState('');

    return (
        // <View>
        //     <Text style={styles.dollarSize}> $
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholder={dummyText}
                placeholderTextColor="black"
                autoCompleteType='off'
                autoCorrect={false}
                keyboardType={keyboard}
                autoFocus={true}
                clearButtonMode="always"
                // ** TODO: React-Native keyboard would stay onFocus
                // ** Not an issue with changing Parent-State 
                // ** Must figure out why
                onChangeText={setState}
                // ** Successfully clears state
                value={state}
            />
        </View>
        //     </Text>
        // </View>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
