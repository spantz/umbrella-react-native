'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import IntroFlowScene from './scenes/IntroFlowScene';

export default class umbrellaReactNative extends Component {
    render() {
        return <IntroFlowScene/>;
    }
}

AppRegistry.registerComponent('umbrellaReactNative', () => umbrellaReactNative);
