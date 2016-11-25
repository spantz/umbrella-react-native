"use strict";
// @flow

import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { Button, Hero } from "../components";

export default class InfoScreen extends React.Component {
    render() {
        let buttonJsx = null;
        if (typeof this.props.buttonText !== "undefined") {
            buttonJsx = (
                <View style={[]}>
                    <View style={[]}/>
                    <View style={[]}/>
                </View>
            );
        }

        let subHeroJsx = null;
        if (typeof this.props.subHero !== "undefined") {
            subHeroJsx = (
                <Text style={[]}>
                    {this.props.subHero}
                </Text>
            );
        }

        return (
            <View style={[]}>
                <Hero style={[]}>
                    {this.props.hero}
                </Hero>
                {subHeroJsx}
                <View>
                    {this.props.children}
                </View>
                {buttonJsx}
            </View>
        );
    }
}