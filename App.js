import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar,Image,TextInput,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './src/pages/Login';
import Button from './src/pages/Button';
import Status from './src/pages/Status';

class DetailsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Login: Login,
        Button: Button,
        Status: Status

    },{
        initialRouteName: 'Login'
    }
);

const AppContainer = createAppContainer(RootStack);

/*type Props = {};*/
export default class App extends Component </*Props*/> {
  render() {
    return (
        /*<View style={styles.container}>
            <StatusBar backgroundColor="#29434e" barStyle="light-content" />*/
        <AppContainer />
       /* </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  }
});


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shaket for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

