'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import WelcomeScene from './scenes/WelcomeScene';

export default class umbrellaReactNative extends Component {
    render() {
        let initialRoute = {
            title: 'Welcome',
            index: 0
        };
        return (
            <WelcomeScene/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('umbrellaReactNative', () => umbrellaReactNative);
