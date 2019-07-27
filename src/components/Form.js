import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class Form extends Component {

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Button')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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
  },
  inputBox: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: "#29434e",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: '500',
    textAlign: "center",
  }
});
