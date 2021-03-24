import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2CFE9',
        textAlign: 'center',
        // marginLeft: 10,
        width: 120,
        height: 40,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Courier New',
    },
})

const MainScreenInputField = ({ width }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                // placeholder="0.00"
                placeholderTextColor="black"
            />
        </View>
    )
}

MainScreenInputField.defaultProps = {

}

export default MainScreenInputField;
