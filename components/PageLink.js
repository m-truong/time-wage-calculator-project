import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'Helvetica',
        textDecorationLine: "underline",
        marginLeft: 290,
    },
    position: {
        // flex: 1,
        // vertical position
        // justifyContent: 'flex-start',
        // horizontal position
        // alignItems: 'flex-end'
    }
})

// Must pass down as props
const PageLink = ({ text, navigation, screen }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.position}
                onPress={() => { navigation.navigate("MainScreen") }}
            >
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
