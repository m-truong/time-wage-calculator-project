import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
    },
    text: {
        // Tip: Need '100%' width to expand inputField to container 
        backgroundColor: '#E2CFE9',
        width: '100%',
        height: '100%',
        color: 'black',
        fontFamily: 'Courier New',
        fontSize: 16,
        // marginLeft: 120,
        paddingHorizontal: 10,
        width: 120,
        height: 40,
        alignSelf: 'flex-end',
    },
})

const MainScreenInputField = ({ word, dummyText, keyboard, width }) => {
    const [state, setState] = word;
    return (
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
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
