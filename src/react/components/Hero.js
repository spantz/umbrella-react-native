"use strict";
// @flow

import React from "react";
import {
    Text
} from "react-native";
import {Typography} from "../../resources/styles";
import type {Style} from "../../resources/styles";

export default class Hero extends React.Component {
    props: {
        style?: Style,
        children?: any
    };

    render() {
        return (
            <Text style={[Typography.hero, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}