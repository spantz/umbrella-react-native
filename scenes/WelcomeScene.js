'use strict';
// @flow

import React, {Component} from 'react';
import {
    View,
    Text,
    Animated,
    LayoutAnimation,
    Easing,
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

const animatedProperties = {
  logo: {
    translateY: new Animated.Value(1000)
  }
}

export default class WelcomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
          animatedProperties,
          anim: {
            logo: {
              transform: [{
                translateY: animatedProperties.logo.translateY
              }]
            }
          }
        };

        this._onPress = this._onPress.bind(this);
        this.popInLogo = this.popInLogo.bind(this);
    }

    componentDidMount() {
      this.popInLogo().start();
    }

    popInLogo() {
      return Animated.spring(this.state.animatedProperties.logo.translateY, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
      });
    }

    _onPress() {
        // Animate the update
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={[styles.rootView, styles.flexOne, GlobalStyles.layout.root]}>
                <Animated.Image source={logo} style={[styles.logo, styles.flexOne, this.state.anim.logo]}/>
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
                            onPress={this._onPress}
                            />
                        <View style={styles.flexOne}/>
                    </View>
                </View>
            </View>
        );
    }
}
