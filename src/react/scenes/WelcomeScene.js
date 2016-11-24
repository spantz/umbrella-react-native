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

import * as Styles from "../../resources/styles";
import Button from "../components/Button";

const logo = require("../../resources/img/logo.png");

export default class WelcomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: false
        };
    }

    // React Component Lifecycle
    componentDidMount() {}

    render() {
        return (
            <View style={Styles.Global.View.body}>
                <Image className="logo" style={Styles.Global.Image.logo} source={logo}/>
                <View>
                    <Text style={Styles.Typography.hero}> Umbrella </Text>
                    <Text style={Styles.Typography.subhero}> Your daily resource {"\n"} for mental health. </Text>
                </View>
                <View style={[Styles.Global.View.column, { flex: 1, justifyContent: "flex-end", paddingBottom: 10 }]}>
                     <Button
                        text="Let's Go"
                        onPress={this.props.onContinue.bind(this)}
                        disabled={this.state.buttonDisabled}/>
                </View>
            </View>
        );
    }
}
