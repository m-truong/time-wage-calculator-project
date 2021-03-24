import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MainScreenRow from '../components/MainScreenRow';
import MainScreenLabel from '../components/MainScreenLabel';
import MainScreenInputField from '../components/MainScreenInputField';
import MainScreenCalculator from '../components/MainScreenCalculator';
import MyButton from '../components/MyButton';
import PageLink from '../components/PageLink'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        // paddingTop: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
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
            <MainScreenRow text={"Hourly Wage"} width={20}>
                {/* <MainScreenLabel />
                <MainScreenInputField /> */}
            </MainScreenRow>
            <MainScreenRow text={"Price of Expense"} width={20}>
                {/* <MainScreenLabel />
                <MainScreenInputField /> */}
            </MainScreenRow>
            <MainScreenRow text={"Label"} width={20}>
                {/* <MainScreenLabel />
                <MainScreenInputField /> */}
            </MainScreenRow>
            <MyButton text={"Calculate"} />
            <MainScreenCalculator />
            <Image
                source={require('../res/images/calculatingImage.png')}
            />
        </View>
    )
}

MainScreen.defaultProps = {

}

export default MainScreen;
