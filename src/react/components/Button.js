"use strict";
// @flow

import {Component, PropTypes} from "react";
import {
    Text,
    TouchableOpacity
} from "react-native";


import {Buttons} from "../../resources/styles";

export default class Button extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number])
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
}