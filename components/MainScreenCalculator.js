import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C8F0CD',
        padding: 20,
        width: 320,
        height: 125,
        textAlign: 'center',
        // Tip: Don't need flex to justifyContent**
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    nested: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
        fontSize: 38,
        fontFamily: 'Courier New',
    },
    label: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Courier New',
        
    }
})

const MainScreenCalculator = ({ hour, min, sec }) => {
    return (
        <View style={styles.container}>
            <View style={styles.nested}>
                <Text style={styles.text}>{hour}</Text>
                <Text style={styles.label}>HOURS</Text>
            </View>
            <Text style={styles.text}>:</Text>
            <View style={styles.nested}>
                <Text style={styles.text}>{min}</Text>
                <Text style={styles.label}>MIN</Text>
            </View>

            <Text style={styles.text}>:</Text>
            <View style={styles.nested}>
                <Text style={styles.text}>{sec}</Text>
                <Text style={styles.label}>SEC</Text>
            </View>

        </View>
    )
}

MainScreenCalculator.defaultProps = {
    hour: `00`,
    min: `00`,
    sec: `00`,
}

export default MainScreenCalculator;
