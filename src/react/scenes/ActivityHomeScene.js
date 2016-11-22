"use strict";
// @flow

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import GlobalStyles from "../../resources/styles/global";
import Scale from "../../scale";
import Colors from "../../resources/styles/colors";

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
    contentContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    hero: {
        color: Colors.black,
        marginTop: 20
    },
    filterContainer: {
        marginTop: 10,
        flexDirection: "row"
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
    }
});

export default class ActivityHomeScene extends React.Component {
    render() {
        return (
            <View style={[GlobalStyles.layout.root, styles.background]}>
                <View style={[GlobalStyles.colors.screen, styles.topSection]}>
                    <View style={[styles.topSectionInView]}>
                        <Text style={styles.score}>
                            240
                        </Text>
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
                </View>
            </View>
        );
    }
}