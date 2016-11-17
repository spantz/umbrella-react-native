"use strict";
// @flow

import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import GlobalStyles from "../../src/resources/styles/global";

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#2E8DD6",
        borderRadius: 10
    },
    buttonText: {
        alignSelf: "stretch",
        textAlign: "center"
    }
});

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style, styles.button]} onPress={this.props.onPress}>
                <Text style={[GlobalStyles.text.button, styles.buttonText]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}