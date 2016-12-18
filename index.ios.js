"use strict";

import React from "react";
import {
    AppRegistry,
    StatusBar,
    Image
} from "react-native";

import IntroFlow from "./src/react/flows/IntroFlow";
import * as Styles from "./src/resources/styles";
import {background} from "./src/resources/images";

export default class Umbrella extends React.Component {
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
