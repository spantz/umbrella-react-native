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

import Button from './components/Button';

const logo = require('../resources/img/logo.png');

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        margin: 20,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    screen: {
        flex: 1
    },
    first: {
        alignItems: 'stretch',
    },
    alignCenter: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    button: {
        marginBottom: 30,
        flex: 6,
    },
    sides: {
        flex: 1
    }
});

export default class WelcomeScene extends Component {
    render() {
        return (
            <View style={[styles.first, GlobalStyles.colors.screen, GlobalStyles.layout.root, styles.screen]}>
                <Image source={logo} style={styles.logo}/>
                <View style={[styles.alignCenter, {flex: 1}]}>
                    <Text style={[GlobalStyles.text.hero, styles.alignCenter]}>
                        Umbrella
                    </Text>
                    <Text style={GlobalStyles.text.subHero}>
                        Your daily resource for mental health.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.sides}/>
                        <Button
                            text="Let's Go"
                            style={styles.button}
                            onPress={this.props.onContinue.bind(this)}
                            />
                        <View style={styles.sides}/>
                    </View>

                </View>
            </View>
        );
    }
}
