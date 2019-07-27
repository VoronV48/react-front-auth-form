import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Status')}
                >
                    <Text style={styles.buttonText}>Button</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    button: {
        width: 300,
        height: 150,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,

    }

});
