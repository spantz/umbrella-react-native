"use strict";
// @flow

import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { Button, Hero } from "../components";
import { Global } from "../../resources/styles";

export default class InfoScreen extends React.Component {
    render() {
        let buttonJsx = null;
        if (typeof this.props.buttonText !== "undefined") {
            buttonJsx = (
                <Button text={this.props.buttonText} onPress={this.props.onPress} />
            );
        }

        return (
            <View style={[Global.Grid.column, this.props.style]}>
                <Hero style={this.props.heroStyle}>
                    {this.props.hero}
                </Hero>
                <View>
                    {this.props.children}
                </View>
                <View style={[Global.View.container, Global.Grid.justifyEnd, { marginBottom: 10 }]}>
                    {buttonJsx}
                </View>
            </View>
        );
    }
}