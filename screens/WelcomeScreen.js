import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink'
import WelcomeScreenBubble from '../components/WelcomeScreenBubble'
import BubbleStyles from '../utilities/BubbleStyles'
import { text } from '../utilities/Text'

const styles = StyleSheet.create({
    // Tip: Essentially flexbox 'Bootstrap' properties
    container: {
        flex: 1,
        // paddingTop: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff'
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
                // Note: Must pass down {navigation} as a prop to the <TouchableOpacity> component to change screens
                navigation={navigation}
            />
            <WelcomeScreenBubble
                text={text.text1}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text2}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text3}
                background={BubbleStyles.background1}
                textStyle={BubbleStyles.text} />
            <WelcomeScreenBubble
                text={text.text4}
                background={BubbleStyles.background2}
                textStyle={BubbleStyles.text} />
            <Image
                source={require('../res/images/incomeInequalityImage.png')}
            />
            <MyButton
                text={"Continue"}
                navigation={navigation} 
                screen={"InfoScreen"}/>
        </View>
    )
}

WelcomeScreen.defaultProps = {

}

export default WelcomeScreen;
