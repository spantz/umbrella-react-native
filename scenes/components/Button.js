'use strict';
// @flow

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import GlobalStyles from './../../resources/styles/global';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    sides: {
        flex: 1
    },
    button: {
        alignItems: 'center',
        marginBottom: 30,
        justifyContent: 'center',
        height: 50,
        flex: 6,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#2E8DD6',
        borderRadius: 10
    },
    buttonText: {
        alignSelf: 'stretch',
        textAlign: 'center'
    }
});

export default class Button extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.sides}/>
                <TouchableOpacity style={[styles.alignCenter, styles.button]} onPress={this.props.onPress}>
                    <Text style={[GlobalStyles.text.button, styles.buttonText]}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
                <View style={styles.sides}/>
            </View>
        );
    }
}