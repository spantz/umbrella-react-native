"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated
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
                    <View style={styles.orb}></View>
                </View>
            </View>
        );
    }
}