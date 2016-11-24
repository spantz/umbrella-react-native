"use strict";
// @flow

import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import Button from "../components/Button";



export default class InfoScreen extends React.Component {
    render() {
        let buttonJsx = null;
        if (typeof this.props.buttonText !== "undefined") {
            buttonJsx = (
                <View style={[]}>
                    <View style={[]}/>
                    <Button style={[]} text={this.props.buttonText} onPress={this.props.onPress}/>
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
                <Text style={[]}>
                    {this.props.hero}
                </Text>
                {subHeroJsx}
                <View>
                    {this.props.children}
                </View>
                {buttonJsx}
            </View>
        );
    }
}