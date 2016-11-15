'use strict';
// @flow

import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Button from '../components/Button';

import GlobalStyles from '../../resources/styles/global';

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        marginBottom: 90,
        flex: 6,
    }
});

export default class InfoScreen extends React.Component {
    render() {
        let buttonJsx = null;
        if (typeof this.props.buttonText !== 'undefined') {
            buttonJsx = (
                <View style={[styles.flexOne, styles.buttonContainer]}>
                    <View style={styles.flexOne}/>
                    <Button style={styles.button} text={this.props.buttonText} onPress={this.props.onPress}/>
                    <View style={styles.flexOne}/>
                </View>
            );
        }

        let subHeroJsx = null;
        if (typeof this.props.subHero !== 'undefined') {
            subHeroJsx = (
                <Text style={GlobalStyles.text.subHero}>
                    {this.props.subHero}
                </Text>
            );
        }

        return (
            <View style={this.props.style}>
                <Text style={[GlobalStyles.text.hero]}>
                    {this.props.hero}
                </Text>
                {subHeroJsx}
                {buttonJsx}
            </View>
        );
    }
}