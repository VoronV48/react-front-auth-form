import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Form from "./../components/Form.js"


export default class Login extends Component<{}> {

    static  navigationOptions = {
        header: null
    }
    render() {
        return(
            <View style={styles.container}>
                <Form/>
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
  signUpTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signUpText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize:16,
  },
  signUpButton: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff'
  }

});
