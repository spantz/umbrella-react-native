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
import {Global} from "../../../resources/styles";

const styles = StyleSheet.create({
    activity: {
        backgroundColor: "#fff",
        position: "relative"
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
    introOrb: {
        position: "absolute",
        left: 0,
        right: 0
    },
    orb: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderRadius: 50,
        alignSelf: "center"
    },
    scaleOrb: {
        position: "relative"
    }
});

type Props = {};

export default class BreatheActivity extends React.Component {
    props: Props;

    state: {
        introFinished: boolean,
        bottom: any,
        scale: any
    };

    constructor(props: Props) {
        super(props);
        (this:any).repeatAnimation = this.repeatAnimation.bind(this);
        (this:any).introAnimation = this.introAnimation.bind(this);
        this.state = {
            introFinished: false,
            bottom: new Animated.Value(700),
            scale: new Animated.Value(1)
        };
    }

    componentDidMount() {
        this.introAnimation();
    }

    introAnimation() {
        Animated.sequence([
            Animated.timing(
                this.state.bottom,
                {
                    toValue: 210,
                    duration: 1100,
                    easing: Easing.bounce
                }
            ),
            Animated.delay(700)
        ]).start(() => {
            this.setState({
                introFinished: true,
                bottom: 0
            });

            this.repeatAnimation();
        });
    }

    repeatAnimation() {
        Animated.sequence([
            Animated.timing(
                this.state.scale,
                {
                    toValue: 2,
                    duration: 1800,
                    easing: Easing.ease
                }
            ),
            Animated.delay(500),
            Animated.timing(
                this.state.scale,
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
        let ballStyles = (this.state.introFinished ? styles.scaleOrb : styles.introOrb);
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
                    <Animated.View style={[ballStyles, {bottom: this.state.bottom, transform: [{scale: this.state.scale}]}]}>
                        <View style={[styles.orb]}/>
                    </Animated.View>
                </View>
            </View>
        );
    }
}