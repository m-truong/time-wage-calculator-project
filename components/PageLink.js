import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'Helvetica',
        textDecorationLine: "underline",
    },
    position: {
        // flex: 1,
        // vertical position
        // justifyContent: 'flex-start',
        // horizontal position
        // alignItems: 'flex-end'
    }
})

const PageLink = ({text}) => {
    return (
        <View>
            <TouchableOpacity style={styles.position}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

PageLink.defaultProps = {

}

export default PageLink;
