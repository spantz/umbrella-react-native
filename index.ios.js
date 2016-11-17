"use strict";

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from "react-native";

import IntroFlow from "./src/react/flows/IntroFlow";

export default class Umbrella extends Component {
    render() {
        return <IntroFlow/>;
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);
