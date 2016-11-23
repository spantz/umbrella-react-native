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
import GlobalStyles from "../../resources/styles/global";
import Scale from "../../scale";
import Colors from "../../resources/styles/colors";
import Card from "../components/Card";

const moodThumb = require("../../resources/img/activities/mood-thumb.png");
const breatheThumb = require("../../resources/img/activities/mood-breathe.png");

const scaleHalf = Scale.WIDTH_50_PERCENT;
const borderRadius = scaleHalf / 2;
const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1
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
        alignItems: "center"
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
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    hero: {
        color: Colors.black,
        marginTop: 20
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
        flex: 1
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
            <View style={[GlobalStyles.layout.root, styles.root]}>
                <View style={[GlobalStyles.colors.screen, styles.topSection]}>
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
                    <Text style={[GlobalStyles.text.hero, styles.hero]}>
                        Keep it up!
                    </Text>
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
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Mood
                                </Text>
                                <Image source={moodThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Breathe
                                </Text>
                                <Image source={breatheThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                        </View>
                        <View style={styles.cardFlexer}>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Mood 2
                                </Text>
                                <Image source={moodThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Breathe 2
                                </Text>
                                <Image source={breatheThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                        </View>
                        <View style={styles.cardFlexer}>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Mood 3
                                </Text>
                                <Image source={moodThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                            <Card size={Card.CARD_SIZE_HALF} style={styles.card}>
                                <Text style={[GlobalStyles.text.hero, styles.cardHero]}>
                                    Breathe 3
                                </Text>
                                <Image source={breatheThumb} resizeMode={"contain"} style={styles.cardImage}/>
                            </Card>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}