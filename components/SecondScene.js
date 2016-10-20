'use strict';
// @flow

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class SecondScene extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <TouchableOpacity
                    onPress={this.props.onForward}
                >
                    <Text>Onward!!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.props.onBack}
                >
                    <Text>Go Back!!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}