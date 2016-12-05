"use strict";
// @flow

import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { Buttons } from "../../resources/styles";

export default class Button extends Component {
    static propTypes = {
        onPress: React.PropTypes.func.isRequired,
        text: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <TouchableOpacity style={[Buttons.primary.view, this.props.style]} onPress={this.props.onPress} disabled={this.props.disabled}>
                <Text style={[Buttons.primary.text, this.props.style]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
};