"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import GlobalStyles from "../../resources/styles/global";
import Button from "../components/Button";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    flexOne: {
        flex: 1
    },
    button: {
        marginBottom: 50,
        flex: 6
    }
});

export default class ActivityHomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {

    }

    render() {
        return (
            <View style={GlobalStyles.layout.root}>
                <Text style={GlobalStyles.text.hero}>
                    Activities
                </Text>
                <Text style={GlobalStyles.text.subHero}>
                    Select an activity.
                </Text>
                <View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.flexOne}/>
                        <Button
                            text="Breathe"
                            onPress={this.onPress}
                            style={styles.button}/>
                        <View style={styles.flexOne}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.flexOne}/>
                        <Button
                            text="Mood Journal"
                            onPress={this.onPress}
                            style={styles.button}/>
                        <View style={styles.flexOne}/>
                    </View>
                </View>
            </View>
        );
    }
}