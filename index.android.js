"use strict";

import React from "react";
import {AppRegistry} from "react-native";

import IntroFlow from "./src/react/flows/IntroFlow";
import * as Styles from "./src/resources/styles";

import {background} from "./src/resources/images";


export default class umbrellaReactNative extends React.Component {
    render() {
        return (
            <Image style={[Styles.Global.Image.background]} source={background}>
                <IntroFlow/>
            </Image>
        );
    }
}

AppRegistry.registerComponent("umbrellaReactNative", () => umbrellaReactNative);
