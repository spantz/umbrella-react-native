"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing
} from "react-native";
import {
    Hero,
    Subhero
} from "../../components/";
import { Global } from "../../../resources/styles";

const styles = StyleSheet.create({
    activity: {
        backgroundColor: "#fff"
    },
    headerContainer: {
        flex: 1,
        alignItems: "center"
    },
    hero: {
        color: "#000",
        flex: 1
    },
    subhero: {
        color: "#999",
        flex: 1
    },
    dropContainer: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    orb: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderRadius: 50
    }
});

export default class BreatheActivity extends React.Component {
    constructor(props) {
        super(props);
        this.repeatAnimation = this.repeatAnimation.bind(this);
        this.scale = new Animated.Value(1);
    }

    componentDidMount() {
        this.repeatAnimation();
    }

    repeatAnimation() {
        Animated.sequence([
            Animated.timing(
                this.scale,
                {
                    toValue: 2,
                    duration: 1800,
                    easing: Easing.ease
                }
            ),
            Animated.delay(500),
            Animated.timing(
                this.scale,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.ease
                }
            ),
            Animated.delay(500)
        ]).start(this.repeatAnimation);
    }

    render() {
        return (
            <View style={[Global.View.body, styles.activity]}>
                <View style={styles.headerContainer}>
                    <Hero style={styles.hero}>
                        Breathe
                    </Hero>
                    <Subhero style={styles.subhero}>
                        Mindfulness
                    </Subhero>
                </View>
                <View style={styles.dropContainer}>
                    <Animated.View style={{ transform: [{ scale: this.scale }] }}>
                        <View style={[styles.orb]}/>
                    </Animated.View>
                </View>
            </View>
        );
    }
}