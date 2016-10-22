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
    text: {
        fontSize: 14
    },
    header: {
        fontSize: 24
    },
    swiper: {
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
    swiper: Swiper;

    onSwiper(component: Swiper) {
        this.swiper = component;
    }

    render() {
        return (
            <Swiper showsPagination={false} styles={styles.swiper} loop={false} ref={this.onSwiper.bind(this)}>
                <View style={[styles.first, styles.screen]}>
                    <Image source={logo} style={styles.logo}/>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.header, styles.alignCenter]}>
                            Screen One!
                        </Text>
                        <TouchableOpacity style={styles.alignCenter} onPress={() => {
                                this.swiper.scrollBy(1);
                            }}>
                            <Text>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.second, styles.screen]}>
                    <Text style={styles.text}>
                        Screen Two!
                    </Text>
                </View>
                <View style={[styles.third, styles.screen]}>
                    <Text style={styles.text}>
                        Screen Three!
                    </Text>
                </View>
            </Swiper>
        );
    }
}