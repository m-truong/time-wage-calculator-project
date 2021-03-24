import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import MainScreenInputField from './MainScreenInputField'
import MainScreenLabel from './MainScreenLabel'

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
})

const MainScreenRow = ({ text, width }) => {
    return (
        <View>
            {/* <Text> */}
                <MainScreenLabel text={text} />
                <MainScreenInputField width={width}/>
            {/* </Text> */}
        </View>
    )
}

MainScreenRow.defaultProps = {

}

export default MainScreenRow;