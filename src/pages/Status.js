import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class Form extends Component {
    componentDidMount () {
        let currentD = new Date();
        let startHappyHourD = new Date();
        startHappyHourD.setHours(8,30,0); // 5.30 pm
        let endHappyHourD = new Date();
        endHappyHourD.setHours(12,30,0); // 6.30 pm

        console.log("happy hour?")
        if(currentD >= startHappyHourD && currentD < endHappyHourD ){
            alert("Ты не опоздал!");
        }else{
            alert("ТЫ опоздал");
        }

    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Hello this you status</Text>
                <Text style={styles.text}>Name: Marat</Text>
                <Text style={styles.text}>Email: Marat@mail.ru</Text>
                <Text style={styles.text}>money: 0</Text>
            </View>
        )
    }
}
export default withNavigation(Form);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
});
