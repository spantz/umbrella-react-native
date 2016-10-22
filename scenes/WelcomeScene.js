'use strict';
// @flow

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

const logo = require('../img/logo.png');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    second: {
        backgroundColor: 'skyblue'
    },
    third: {
        backgroundColor: 'steelblue'
    },
    window: {
        margin: 5
    },
    blueBG: {
        backgroundColor: '#45B3EE'
    },
    text: {
        fontSize: 14
    },
    header: {
        fontSize: 24
    },
    logo: {
        flex: -1,
        alignItems: 'stretch'
    }
});

export default class WelcomeScene extends Component {
    swiper: Swiper;

    onSwiper(component: Swiper) {
        this.swiper = component;
    }

    render() {
        return (
            <Swiper showsPagination={false} loop={false} ref={this.onSwiper.bind(this)}>
                <View style={[styles.blueBG, styles.flex]}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"/>
                    <Text style={styles.header}>
                        Screen One!
                    </Text>
                    <TouchableOpacity onPress={() => {
                            this.swiper.scrollBy(1);
                        }}>
                        <Text>Continue</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.second, styles.flex]}>
                    <Text style={styles.text}>
                        Screen Two!
                    </Text>
                </View>
                <View style={[styles.third, styles.flex]}>
                    <Text style={styles.text}>
                        Screen Three!
                    </Text>
                </View>
            </Swiper>
        );
    }
}