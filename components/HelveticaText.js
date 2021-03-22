import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica'
    }
})

const HelveticaText = () => {
    return (
        <View>
            <Text style={styles.text}></Text>
        </View>
    )
}

export default HelveticaText;
