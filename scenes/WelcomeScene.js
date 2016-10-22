'use strict';
// @flow

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

const logo = require('../img/logo.png');

const styles = StyleSheet.create({
    text: {
        fontSize: 14
    },
    header: {
        fontSize: 24
    },
    logo: {
        flex: 1,
        margin: 20,
        width: null,
        height: null,
        resizeMode: 'contain',
        alignItems: 'stretch'
    },
    screen: {
        flex: 1
    },
    first: {
        alignItems: 'stretch',
        backgroundColor: '#45B3EE'
    },
    second: {
        backgroundColor: 'skyblue'
    },
    third: {
        backgroundColor: 'steelblue'
    },
    alignCenter: {
        alignItems: 'center'
    }
});

export default class WelcomeScene extends Component {
    render() {
        return (
            <View style={[styles.first, styles.screen]}>
                <Image source={logo} style={styles.logo}/>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.header, styles.alignCenter]}>
                        Screen One!
                    </Text>
                    <TouchableOpacity style={styles.alignCenter} onPress={this.props.onContinue.bind(this)}>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}