"use strict";
// @flow

import React, {Component} from "react";
import {
    View,
    Text,
    Animated,
    LayoutAnimation,
    Easing,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import GlobalStyles from "../../src/resources/styles/global";

import Button from "../components/Button";

const logo = require(".././img/logo.png");

const styles = StyleSheet.create({
    logo: {
        margin: 20,
        width: null,
        height: null,
        resizeMode: "contain"
    },
    rootView: {
        alignItems: "stretch"
    },
    alignCenter: {
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    button: {
        marginBottom: 50,
        flex: 6
    },
    flexOne: {
        flex: 1
    }
});

const animatedProperties = {
    textView: {
        translateY: new Animated.Value(100),
        opacity: new Animated.Value(0)
    },
    logo: {
        translateY: new Animated.Value(1000)
    },
    letsGoButton: {
        opacity: new Animated.Value(0)
    }
};

const animationStyles = {
    logo: {
        transform: [{ translateY: animatedProperties.logo.translateY }]
    },
    heroAndSubHero: {
        opacity: animatedProperties.textView.opacity,
        transform: [{ translateY: animatedProperties.textView.translateY }]
    },
    letsGoButton: {
        opacity: animatedProperties.letsGoButton.opacity
    }
};

export default class WelcomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animatedProperties,
            animationStyles
        };

        this.animateLogoIn = this.animateLogoIn.bind(this);
        this.animateHeroAndSubheroIn = this.animateHeroAndSubheroIn.bind(this);
        this.animatedLetsGoButtonIn = this.animatedLetsGoButtonIn.bind(this);
        this.onLoadAnimation = this.onLoadAnimation.bind(this);
    }


    // React Component Lifecycle

    componentDidMount() {
        this.onLoadAnimation().start();
    }

    // Animations

    animateLogoIn() {
        return Animated.spring(this.state.animatedProperties.logo.translateY, { toValue: 0 });
    }

    animateHeroAndSubheroIn() {
        return Animated.stagger(200, [
            Animated.spring(this.state.animatedProperties.textView.translateY, { toValue: 0 }),
            Animated.spring(this.state.animatedProperties.textView.opacity, { toValue: 1 })
        ]);
    }

    animatedLetsGoButtonIn() {
        return Animated.spring(this.state.animatedProperties.letsGoButton.opacity, { toValue: 1 });
    }


    onLoadAnimation() {
        return Animated.sequence([
            Animated.stagger(100, [
                this.animateLogoIn(),
                this.animateHeroAndSubheroIn()
            ]),
            Animated.delay(1000),
            this.animatedLetsGoButtonIn()
        ]);
    }

    render() {
        return (
            <View style={[styles.rootView, styles.flexOne, GlobalStyles.layout.root]}>
                <Animated.Image className="logo" source={logo}
                                style={[styles.logo, styles.flexOne, this.state.animationStyles.logo]}/>
                <Animated.View style={[styles.alignCenter, styles.flexOne, this.state.animationStyles.heroAndSubHero]}>
                    <View className="textView" style={[styles.alignCenter]}>
                        <Text style={[GlobalStyles.text.hero]}>
                            Umbrella
                        </Text>
                        <Text style={GlobalStyles.text.subHero}>
                            Your daily resource for mental health.
                        </Text>
                    </View>
                    <Animated.View
                        style={[styles.flexOne, styles.buttonContainer, this.state.animationStyles.letsGoButton]}>
                        <View style={styles.flexOne}/>
                        <Button
                            text="Let's Go"
                            style={styles.button}
                            onPress={this.props.onContinue.bind(this)}
                        />
                        <View style={styles.flexOne}/>
                    </Animated.View>
                </Animated.View>
            </View>
        );
    }
}
