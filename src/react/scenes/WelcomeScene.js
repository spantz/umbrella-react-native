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
import AnimationFactory from "../../resources/factories/animations";

import * as Styles from "../../resources/styles";
import { logo } from "../../resources/images";
import Button from "../components/Button";


let animations = {
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

    // React Component Lifecycle
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
            <View style={Styles.Global.View.body}>
                <Animated.Image className="logo" style={[Styles.Global.Image.logo, animations.logo.styles]} source={logo}/>
                <Animated.View style={[animations.text.styles]}>
                    <Text style={Styles.Typography.hero}> Umbrella </Text>
                    <Text style={Styles.Typography.subhero}> Your daily resource {"\n"} for mental health. </Text>
                </Animated.View>
                <Animated.View style={[Styles.Global.View.column, animations.button.styles, { flex: 1, justifyContent: "flex-end"}]}>
                     <Button
                        text="Let's Go"
                        onPress={this.props.onContinue.bind(this)}
                        disabled={this.state.buttonDisabled}/>
                </Animated.View>
            </View>
        );
    }
}
