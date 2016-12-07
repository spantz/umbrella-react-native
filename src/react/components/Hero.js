"use strict";
// @flow

import {Component} from "react";
import {
    Text
} from "react-native";
import {Typography} from "../../resources/styles";


export default class Hero extends Component {
    static propTypes = {
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number])
    };

    render() {
        return (
            <Text style={[Typography.hero, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}