import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 19,
        marginRight: 105,
        // paddingRight: 100,
    },
})

const MainScreenLabel = ({ text }) => {
    return (
        // ** Fix was to wrap it in a <View> Container!
        <View>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;