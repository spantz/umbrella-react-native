"use strict";
// @flow

import React from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Scale from "../../scale";

const CARD_FULL_MARGIN = 40;
const CARD_FULL_WIDTH = Scale.WINDOW_WIDTH - CARD_FULL_MARGIN * 2;
const CARD_HALF_MARGIN = 20;
const CARD_HALF_WIDTH = Scale.WIDTH_50_PERCENT - CARD_HALF_MARGIN * 2;

const heightWidthRatio = 1.4;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        shadowColor: "#555",
        shadowOpacity: .3,
        shadowRadius: 5,
        borderRadius: 8,
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    cardFull: {
        margin: CARD_FULL_MARGIN,
        width: CARD_FULL_WIDTH,
        height: CARD_FULL_WIDTH * heightWidthRatio
    },
    cardHalf: {
        margin: CARD_HALF_MARGIN,
        width: CARD_HALF_WIDTH,
        height: CARD_HALF_WIDTH * heightWidthRatio
    }
});


const CARD_SIZE_FULL = "full_size";
const CARD_SIZE_HALF = "half_size";

export default class Card extends React.Component {
    static CARD_SIZE_FULL = CARD_SIZE_FULL;
    static CARD_SIZE_HALF = CARD_SIZE_HALF;

    static propTypes = {
        size: React.PropTypes.oneOf([CARD_SIZE_FULL, CARD_SIZE_HALF])
    };

    static defaultProps = {
        size: CARD_SIZE_FULL
    };

    render() {
        let sizeStyle = styles.cardFull;
        if (this.props.size === this.constructor.CARD_SIZE_HALF) {
            sizeStyle = styles.cardHalf;
        }

        return (
            <View style={[styles.card, sizeStyle, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}