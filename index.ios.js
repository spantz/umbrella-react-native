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
        return <WelcomeScene/>;
    }
}

AppRegistry.registerComponent('umbrellaReactNative', () => umbrellaReactNative);
