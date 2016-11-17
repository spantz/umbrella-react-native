"use strict";
// @flow

import React from "react";

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image
} from "react-native";

import GlobalStyles from "../../resources/styles/global";

const CARD_MARGIN = 40;
const CARD_WIDTH = Dimensions.get("window").width - CARD_MARGIN  * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

const breatheScreenshot = require("./.././img/breathe-screenshot.png");
const moodScreenshot = require("./.././img/mood-screenshot.png");

const styles = StyleSheet.create({
    activity: {
        backgroundColor: "#fff",
        margin: CARD_MARGIN,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        shadowColor: "#555",
        shadowOpacity: .3,
        shadowRadius: 5,
        borderRadius: 8,
        padding: 5,
        justifyContent: "center"
    },
    hero: {
        textAlign: "center",
        color: "#000"
    },
    subHero: {
        textAlign: "center",
        color: "#888",
        fontSize: 14
    },
    image: {
        alignSelf: "stretch",
        flex: 1,
        width: null,
        height: null
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
                        <Image source={breatheScreenshot} resizeMode={"contain"} style={styles.image}/>
                    </View>
                    <View style={styles.activity}>
                        <Image source={moodScreenshot} style={styles.image}/>
                    </View>
                    <View style={styles.activity}>
                        <Text style={[GlobalStyles.text.hero, styles.hero]}>More Coming Soon</Text>
                        <Text style={[styles.subHero]}>Early 2017</Text>
                    </View>

                </ScrollView>
            </View>
		);
	}
}