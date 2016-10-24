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
    buttonText: {

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
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                        <View style={{flex: 1}}/>
                        <TouchableOpacity style={[styles.alignCenter, {marginBottom: 30, justifyContent: 'center', height: 50, flex: 6, backgroundColor: '#fff', borderWidth: 1, borderColor: '#2E8DD6', borderRadius: 10}]} onPress={this.props.onContinue.bind(this)}>
                            <Text style={[GlobalStyles.text.button, {alignSelf: 'stretch', textAlign: 'center'}]}>
                                Let's Go
                            </Text>
                        </TouchableOpacity>
                        <View style={{flex: 1}}/>
                    </View>
                </View>
            </View>
        );
    }
}