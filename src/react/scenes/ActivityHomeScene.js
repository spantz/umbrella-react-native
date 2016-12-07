"use strict";
// @flow

import React from "react";
import {View} from "react-native";

import {Global} from "../../resources/styles";
import {Button, Hero} from "../components";

export default class ActivityHomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {

    }

    render() {
        return (
            <View style={[Global.View.body]}>
                <Hero>Activities</Hero>
                <View style={[Global.Grid.column]}>
                    <Button text="Breathe" onPress={this.onPress}/>
                    <Button text="Mood Journal" onPress={this.onPress}/>
                </View>
            </View>
        );
    }
}