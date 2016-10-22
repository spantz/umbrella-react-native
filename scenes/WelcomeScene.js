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

import GlobalStyles from './../resources/styles/global';

const logo = require('../resources/img/logo.png');

const styles = StyleSheet.create({
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
    },
    alignCenter: {
        alignItems: 'center'
    }
});

export default class WelcomeScene extends Component {
    render() {
        return (
            <View style={[styles.first, GlobalStyles.colors.screen, styles.screen]}>
                <Image source={logo} style={styles.logo}/>
                <View style={styles.alignCenter}>
                    <Text style={[GlobalStyles.text.hero, styles.alignCenter]}>
                        Screen One!
                    </Text>
                    <TouchableOpacity style={styles.alignCenter} onPress={this.props.onContinue.bind(this)}>
                        <Text style={GlobalStyles.text.button}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}