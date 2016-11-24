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
import * as Styles from "./resources/styles";

import { background } from "./src/resources/images";



export default class umbrellaReactNative extends Component {
    render() {
        return (
            <Image style={[Styles.Global.Image.background]} source={background}>
                <IntroFlow/>
            </Image>
        );
    }
}

AppRegistry.registerComponent("umbrellaReactNative", () => umbrellaReactNative);
