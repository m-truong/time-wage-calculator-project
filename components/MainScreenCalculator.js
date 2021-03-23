import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#C8F0CD',
        padding: 20,
        width: 320,
        height: 125,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
})

const MainScreenCalculator = ({ data }) => {
    return (
        <View style={styles.container}>

        </View>
    )
}

MainScreenCalculator.defaultProps = {

}

export default MainScreenCalculator;
