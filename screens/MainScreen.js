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
        color: 'black',
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100,
    }
})

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
        </View>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
