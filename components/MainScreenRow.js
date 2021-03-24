/* TODO: Having issues adding spacing between <Label> and <InputField>! */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MainScreenInputField from './MainScreenInputField'
import MainScreenLabel from './MainScreenLabel'

const styles = StyleSheet.create({
    container: {
        // margin: 10,
        flex: 3,
        flexDirection: "row", 
        justifyContent: 'space-between',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
})

const MainScreenRow = ({ text, width }) => {
    return (
        // Tip: Both components need to be nested inside <Text> component to display inline
        <View style={styles.container}>
            {/* TODO: Having issues adding spacing between <Label> and <InputField>! */}
            <Text>
                <MainScreenLabel text={text} />
                <MainScreenInputField width={width} />
            </Text>
        </View>
    )
}

MainScreenRow.defaultProps = {

}

export default MainScreenRow;