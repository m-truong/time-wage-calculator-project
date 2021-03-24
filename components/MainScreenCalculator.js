import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C8F0CD',
        padding: 20,
        width: 320,
        height: 125,
        textAlign: 'center',
        // marginLeft: 5,
        // paddingLeft: 5,
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Courier New',
    },
})

const MainScreenCalculator = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
        </View>
    )
}

MainScreenCalculator.defaultProps = {

}

export default MainScreenCalculator;
