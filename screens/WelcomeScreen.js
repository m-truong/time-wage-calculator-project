import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import PageLink from '../components/PageLink'
import TextField from '../components/TextField'
import { text } from '../utilities/Text'

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // assign paddingTop 60px = height of <Header> component to clear the top
        // paddingTop: 60,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 30
    },
    // Note: React-Native 'styles' attribute doesn't take units (e.g. px, em), just 100
    img: {
        width: 100,
        height: 100,
        // Gives rounded borders
        // borderRadius: (100 / 2)
    }
})

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink text={"Skip Intro"}/>
            <TextField text={text.text1} />
            <TextField text={text.text2} />
            <TextField text={text.text3} />
            <TextField text={text.text4} />
            {/* Image */}
            <Button text={"Continue"}/>
        </View>
    )
}

WelcomeScreen.defaultProps = {

}

export default WelcomeScreen;
