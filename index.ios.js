"use strict";

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from "react-native";

import IntroFlowScene from "./react/IntroFlowScene";

export default class Umbrella extends Component {
    render() {
        return <IntroFlowScene/>;
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);
