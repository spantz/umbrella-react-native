"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Global } from "../../resources/styles";
import { Button, Hero } from "../components";
import BreatheActivity from "./activities/BreatheActivity";

export default class ActivityHomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.openBreathe = this.openBreathe.bind(this);
    }

    onPress() {

    }

    openBreathe() {
        this.props.navigator.push({
            index: 1,
            component: BreatheActivity
        });
    }

    render() {
        return (
            <View style={[Global.View.body]}>
                <Hero>Activities</Hero>
                <View style={[Global.Grid.column]}>
                    <Button text="Breathe" onPress={this.openBreathe}/>
                    <Button text="Mood Journal" onPress={this.onPress}/>
                </View>
            </View>
        );
    }
}