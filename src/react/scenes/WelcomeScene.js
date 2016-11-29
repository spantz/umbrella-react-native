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

import { Button, Hero, Subhero } from "../components";
import AnimationFactory from "../../resources/factories/animations";
import { Global } from "../../resources/styles";
import { logo } from "../../resources/images";


const animations = {
    logo: new AnimationFactory({ top: [1000, 0] }),
    text: new AnimationFactory({ opacity: [0, 1] }),
    button: new AnimationFactory({ top: [50, 0], opacity: [0, 1] })
};

export default class WelcomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: true
        };
    }

    componentDidMount() {
        Animated.sequence([
            Animated.delay(1000),
            animations.logo.parallel,
            Animated.stagger(200, [
                animations.text.parallel,
                animations.button.parallel
            ])
        ]).start(() => {
            this.setState({
                buttonDisabled: false
            });
        });
    }

    render() {
        return (
            <View style={Global.View.body}>
                <Animated.Image className="logo" style={[Global.Image.logo, animations.logo.styles]} source={logo}/>
                <Animated.View style={[animations.text.styles]}>
                    <Hero> Umbrella </Hero>
                    <Subhero> Your daily resource {"\n"} for mental health. </Subhero>
                </Animated.View>
                <Animated.View style={[Global.Grid.column, animations.button.styles, { justifyContent: "flex-end" }]}>
                     <Button
                        text="Let's Go"
                        onPress={this.props.onContinue.bind(this)}
                        disabled={this.state.buttonDisabled}/>
                </Animated.View>
            </View>
        );
    }
}
