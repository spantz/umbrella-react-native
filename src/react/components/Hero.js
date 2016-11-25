"use strict";
// @flow

import React, {Component} from "react";
import {
    View,
    Text,
} from "react-native";
import { Typography } from "../../resources/styles";


export default class Hero extends Component {
    render() {
        return (
            <Text style={[Typography.hero, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}