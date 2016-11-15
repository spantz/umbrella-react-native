"use strict";
// @flow

import React from "react";

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions
} from "react-native";

import GlobalStyles from "./../resources/styles/global";

const CARD_MARGIN = 40;
const CARD_WIDTH = Dimensions.get("window").width - CARD_MARGIN  * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

const styles = StyleSheet.create({
    activity: {
        backgroundColor: "#fff",
        margin: CARD_MARGIN,
        flex: 1,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        shadowColor: "#555",
        shadowOpacity: .3,
        shadowRadius: 5,
        borderRadius: 8
    },
    text: {
        margin: 5,
        color: "purple"
    }
});

export default class ActivityIntroScene extends React.Component {
	render() {
		return (
            <View style={[GlobalStyles.layout.root]}>
                <Text style={GlobalStyles.text.hero}>
                    We've got lots of activities to help you out.
                </Text>
                <ScrollView
                    directionalLockEnabled={true}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    >
                    <View style={styles.activity}>
                        <Text style={[GlobalStyles.text.hero, styles.text]}>Activity One</Text>
                    </View>
                    <View style={styles.activity}>
                        <Text style={[GlobalStyles.text.hero, styles.text]}>Activity Two</Text>
                    </View>
                    <View style={styles.activity}>
                        <Text style={[GlobalStyles.text.hero, styles.text]}>Activity Three</Text>
                    </View>

                </ScrollView>
            </View>
		);
	}
}