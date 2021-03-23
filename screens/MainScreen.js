import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PageLink from '../components/PageLink'

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

const MainScreen = ({ navigation, screen }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../res/images/informationCircle.png')} />
            </TouchableOpacity>
            {/* Continue Here:::! */}
        </View>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
