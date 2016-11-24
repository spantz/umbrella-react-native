"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Button from "../components/Button";

export default class ActivityHomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {

    }

    render() {
        return (
            <View style={[]}>
                <Text style={[]}>
                    Activities
                </Text>
                <Text style={[]}>
                    Select an activity.
                </Text>
                <View>
                    <View style={[]}>
                        <View style={[]}/>
                        <Button
                            text="Breathe"
                            onPress={this.onPress}
                            style={styles.button}/>
                        <View style={[]}/>
                    </View>
                    <View style={[]}>
                        <View style={[]}/>
                        <Button
                            text="Mood Journal"
                            onPress={this.onPress}
                            style={styles.button}/>
                        <View style={[]}/>
                    </View>
                </View>
            </View>
        );
    }
}