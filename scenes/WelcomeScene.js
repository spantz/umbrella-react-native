'use strict';
// @flow

import React, {Component} from 'react';
import {
    View,
    Text,
    LayoutAnimation,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import GlobalStyles from './../resources/styles/global';

import Button from './components/Button';

const logo = require('../resources/img/logo.png');

const styles = StyleSheet.create({
    logo: {
        margin: 20,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    rootView: {
        alignItems: 'stretch'
    },
    alignCenter: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        marginBottom: 50,
        flex: 6,
    },
    flexOne: {
        flex: 1
    }
});

export default class WelcomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = { w: 10, h: 10};

        this._onPress = this._onPress.bind(this);
    } 

    componentWillReceiveProps() {
        // Animate creation
        LayoutAnimation.spring();
        this.setState({w: 100, h: 100})
    }

    _onPress() {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 25, h: this.state.h + 25})
    }

    render() {
        return (
            <View style={[styles.rootView, styles.flexOne, GlobalStyles.layout.root]}>
                <Image source={logo} style={[styles.logo, styles.flexOne, { width: this.state.w, height: this.state.h}]}/>
                <View style={[styles.alignCenter, styles.flexOne]}>
                    <Text style={[GlobalStyles.text.hero, styles.alignCenter]}>
                        Umbrella
                    </Text>
                    <Text style={GlobalStyles.text.subHero}>
                        Your daily resource for mental health.
                    </Text>
                    <View style={[styles.flexOne, styles.buttonContainer]}>
                        <View style={styles.flexOne}/>
                        <Button
                            text="Let's Go"
                            style={styles.button}
                            onPress={this._onPress.bind(this)}
                            />
                        <View style={styles.flexOne}/>
                    </View>
                </View>
            </View>
        );
    }
}
