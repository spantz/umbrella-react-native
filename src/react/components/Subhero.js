"use strict";
// @flow

import {Component, PropTypes} from "react";
import {
    Text
} from "react-native";
import {Typography, Style} from "../../resources/styles";


export default class Hero extends Component {
    props: {
        style: Style,
        children: any
    };

    static propTypes = {
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number])
    };

    render() {
        return (
            <Text style={[Typography.subhero, this.props.style]}>
                {this.props.children}
            </Text>
        );
    }
}