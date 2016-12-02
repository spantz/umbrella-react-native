"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import { Global } from "../../resources/styles/";
import Scale from "../../scale";
import Colors from "../../resources/styles/colors";
import Card from "../components/Card";

import Hero from "../components/Hero";

const moodThumb = require("../../resources/img/activities/mood-thumb.png");
const breatheThumb = require("../../resources/img/activities/mood-breathe.png");

const scaleHalf = Scale.WIDTH_50_PERCENT;
const borderRadius = scaleHalf / 2;
const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff"
    },
    topSection: {
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        width: scaleHalf,
        height: scaleHalf,
        alignSelf: "center",
        transform: [
            {
                scaleX: 3.5
            }
        ],
        alignItems: "center",
        backgroundColor: "#2E8DD6",
    },
    topSectionInView: {
        width: Scale.WINDOW_WIDTH,
        transform: [
            {
                scaleX: 1 / 3.5
            }
        ]
    },
    score: {
        marginTop: 40,
        color: Colors.white,
        fontSize: 45,
        fontWeight: "bold",
        alignSelf: "center"
    },
    checkBoxContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    checkBox: {
        backgroundColor: Colors.white,
        width: 25,
        height: 25,
        marginLeft: 3,
        marginRight: 3
    },
    contentContainer: {
        flex: 1
    },
    hero: {
        color: Colors.black,
        marginTop: 20,
        textAlign: "left"
    },
    filterContainer: {
        marginTop: 10,
        flexDirection: "row",
        marginBottom: 20
    },
    button: {
        borderColor: Colors.background,
        borderRadius: 8,
        flex: 2,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1
    },
    buttonText: {
        color: Colors.background,
        margin: 5,
        textAlign: "center"
    },
    largeButton: {
        flex: 3
    },
    buttonActive: {
        backgroundColor: Colors.background,
        borderColor: Colors.white
    },
    buttonTextActive: {
        color: Colors.white
    },
    cardFlexer: {
        flexDirection: "row"
    },
    card: {
        flex: -1,
        margin: 10
    },
    cardHero: {
        color: Colors.black,
        flex: 1,
        fontSize: 28
    },
    cardImage: {
        flex: 3,
        alignSelf: "stretch",
        width: null,
        height: null
    }
});

export default class ActivityHomeScene extends React.Component {
    render() {
        return (
            <View style={[Global.View.body, styles.root]}>
                <View style={[styles.topSection]}>
                    <View style={[styles.topSectionInView]}>
                        <Text style={styles.score}>
                            240
                        </Text>
                        <View style={styles.checkBoxContainer}>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                            <View style={styles.checkBox}/>
                        </View>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <Hero style={styles.hero}>
                        Keep it up!
                    </Hero>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={[styles.button, styles.buttonActive]}>
                            <Text style={[styles.buttonText, styles.buttonTextActive]}>
                                New
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                Favorites
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.largeButton]}>
                            <Text style={styles.buttonText}>
                                Recommended
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView pagingEnabled={false}>
                        <View style={styles.cardFlexer}>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Hero style={styles.cardHero}>
                                    Mood
                                </Hero>
                                <Image source={moodThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Hero style={styles.cardHero}>
                                    Breathe
                                </Hero>
                                <Image source={breatheThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}