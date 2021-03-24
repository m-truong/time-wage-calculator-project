import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        fontFamily: 'Helvetica',
        color: 'black',
        fontSize: 19,
    },
})

const MainScreenLabel = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

MainScreenLabel.defaultProps = {

}

export default MainScreenLabel;