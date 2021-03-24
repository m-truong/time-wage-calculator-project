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
        // Tip: Don't need flex to justifyContent**
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 38,
        fontFamily: 'Courier New',
    },
})

const MainScreenCalculator = ({ hour, min, sec }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{hour}</Text>
            <Text style={styles.text}>:</Text>
            <Text style={styles.text}>{min}</Text>
            <Text style={styles.text}>:</Text>
            <Text style={styles.text}>{sec}</Text>
        </View>
    )
}

MainScreenCalculator.defaultProps = {
    hour: `00`,
    min: `00`,
    sec: `00`,
}

export default MainScreenCalculator;
