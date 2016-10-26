'use strict';
// @flow

import React from 'react';
import Swiper from 'react-native-swiper';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import GlobalStyles from './../resources/styles/global';
import Button from './components/Button';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center'
    },
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
    },
});

export default class InfoScene extends React.Component {
    swiper: Swiper;

    constructor(props) {
        super(props);

        this.goForward = this.goForward.bind(this);
        this.onSwiperMount = this.onSwiperMount.bind(this);
    }

    goForward() {
        this.swiper.scrollBy(1);
    }

    onSwiperMount(swiper: Swiper) {
        this.swiper = swiper;
    }

    render() {
        return (
            <Swiper showsPagination={true} loop={false} ref={this.onSwiperMount} style={[GlobalStyles.layout.root]}>
                <View style={styles.flex}>
                    <Text style={[GlobalStyles.text.hero]}>
                        Umbrella is here to help you reduce your anxiety, feel better about yourself, and have a brighter day.
                    </Text>
                    <View style={[styles.flexOne, styles.buttonContainer]}>
                        <View style={styles.flexOne}/>
                        <Button style={styles.button} text="Cool" onPress={this.goForward}/>
                        <View style={styles.flexOne}/>
                    </View>
                </View>
                <View style={styles.flex}>
                    <Text style={[GlobalStyles.text.hero]}>
                        Use us in the moment when you're having a bad day.
                    </Text>
                    <Text style={GlobalStyles.text.subHero}>
                        We'll help you relax and calm down when you're struggling.
                    </Text>
                    <View style={[styles.flexOne, styles.buttonContainer]}>
                        <View style={styles.flexOne}/>
                        <Button style={styles.button} text="Great" onPress={this.goForward}/>
                        <View style={styles.flexOne}/>
                    </View>
                </View>
                <View style={styles.flex}>
                    <Text style={[GlobalStyles.text.hero]}>
                        Use us every day to build a brighter future.
                    </Text>
                    <Text style={GlobalStyles.text.subHero}>
                        Check in with us to view long-term goals, progress, and work towards a happier you.
                    </Text>
                </View>
            </Swiper>
        );
    }
}