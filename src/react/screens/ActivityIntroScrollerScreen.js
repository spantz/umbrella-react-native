"use strict";
// @flow

import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView
} from "react-native";
import GlobalStyles from "../../resources/styles/global";

import Card from "../components/Card";

const breatheScreenshot = require("../../resources/img/breathe-screenshot.png");
const moodScreenshot = require("../../resources/img/mood-screenshot.png");

const styles = StyleSheet.create({
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

export default class ActivityIntroScrollerScreen extends React.Component {
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
                    <Card>
                        <Image source={breatheScreenshot} resizeMode={"contain"} style={styles.image}/>
                    </Card>
                    <Card>
                        <Image source={moodScreenshot} style={styles.image}/>
                    </Card>
                    <Card>
                        <Text style={[GlobalStyles.text.hero, styles.hero]}>More Coming Soon</Text>
                        <Text style={[styles.subHero]}>Early 2017</Text>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}