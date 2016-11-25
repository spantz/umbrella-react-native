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

export default class Umbrella extends Component {
    render() {
        return (
            <Image style={Styles.Global.Image.background} source={background}>
                <StatusBar barStyle="light-content"/>
                <IntroFlow/>
            </Image>
        );
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);
