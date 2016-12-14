"use strict";
// @flow

import {Component} from "react";
import {
    Text
} from "react-native";
import {Typography} from "../../resources/styles";


export default class Hero extends Component {
    render() {
        return (
            <Text style={[Typography.subhero, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}