import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
    },  
    text: {
        marginRight: 15,
        fontSize: 19,
        fontFamily: 'Helvetica',
        color: 'black',
    },
})

const MainScreenLabel = ({ text }) => {
    return (
        // ** Fix was to wrap it in a <View> Container!
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;