import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const Bubble = ({ text, textStyle, background}) => {
    return (
        <View style={background}>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

Bubble.defaultProps = {

}

export default Bubble;
