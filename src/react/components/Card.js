"use strict";
// @flow

import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Scale from "../../scale";

const CARD_MARGIN = 40;
const CARD_WIDTH = Scale.WINDOW_WIDTH - CARD_MARGIN  * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

const styles = StyleSheet.create({
    card: {
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
    }
});

export default class Card extends React.Component {
    render() {
        return (
            <View style={[styles.card, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}