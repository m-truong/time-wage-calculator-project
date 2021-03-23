import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import PageLink from '../components/PageLink'
import Bubble from '../components/Bubble'
import BubbleStyles from '../utilities/BubbleStyles'
import { text } from '../utilities/Text'

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 60,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 30
    },
    img: {
        width: 100,
        height: 100,
    }
})

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <PageLink
                text={"Skip Intro"}
            // Add onPress={() => navigation.navigate('Profile', { name: 'Jane' })
            />
            <Bubble
                text={text.text1}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <Bubble
                text={text.text2}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <Bubble
                text={text.text3}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <Bubble
                text={text.text4}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <Image
                source={require('../res/images/incomeInequalityImage.png')}
            />
            <Button text={"Continue"} />
        </View>
    )
}

WelcomeScreen.defaultProps = {

}

export default WelcomeScreen;
