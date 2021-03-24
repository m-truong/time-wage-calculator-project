import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2CFE9',
        // marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        textAlign: 'center',
        width: 120,
        // height: 20,
    },
    text: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        color: 'black',
        fontFamily: 'Courier New',
        fontSize: 20,
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
