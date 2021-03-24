import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 19,
        paddingRight: 10,
    },
})

const MainScreenLabel = ({ text }) => {
    return (
            <Text style={styles.text}>
                {text}
            </Text>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;