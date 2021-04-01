import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    line: {
        width: 150,
        marginLeft: 28,
        borderColor: 'black',
        borderWidth: 0.5,
        alignSelf: 'stretch',
    }
})

const HorizontalRule = () => {
    return (
        <View style={styles.line}> 
        </View>
    )
}

export default HorizontalRule
