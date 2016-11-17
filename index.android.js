"use strict";

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from "react-native";

import IntroFlow from "./react/flows/IntroFlow";

export default class umbrellaReactNative extends Component {
    render() {
        return <IntroFlow/>;
    }
}

AppRegistry.registerComponent("umbrellaReactNative", () => umbrellaReactNative);
