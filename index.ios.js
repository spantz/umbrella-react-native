"use strict";

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    Image
} from "react-native";

import IntroFlow from "./src/react/flows/IntroFlow";
import * as Styles from "./src/resources/styles";

import { background } from "./src/resources/images";

import BreatheActivity from "./src/react/scenes/activities/BreatheActivity";

export default class Umbrella extends Component {
    render() {
        return (
            <BreatheActivity/>
        );
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);
