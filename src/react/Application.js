"use strict";
// @flow

import React from "react";
import {
    StatusBar,
    Image
} from "react-native";

import IntroFlow from "./flows/IntroFlow";
import * as Styles from "./../resources/styles";
import {background} from "./../resources/images";

export default class Application extends React.Component {
    render() {
        return (
            <Image style={Styles.Global.Image.background} source={background}>
                <StatusBar barStyle="light-content"/>
                <IntroFlow/>
            </Image>
        );
    }
}