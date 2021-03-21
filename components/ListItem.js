import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Tip: Alternative approach to using FontAwesome with react-native-vector-icons package
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        // changes View component flex direction to horizontal
        flexDirection: 'row',
        //Tip: justifyContent horizontally
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    }
})

const ListItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>
                <Icon name="remove" size={20} color="firebrick"/>
            </View>
        </TouchableOpacity>
    )
}

ListItem.defaultProps = {

}

export default ListItem
