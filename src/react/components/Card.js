"use strict";
// @flow

import {Component, PropTypes} from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Scale from "../../scale";
import {Style} from "../../resources/styles";

const CARD_MARGIN = 40;
const CARD_WIDTH = Scale.WINDOW_WIDTH - CARD_MARGIN * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.15;

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
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default class Card extends Component {
    props: {
        style?: Style,
        children: any
    };

    static propTypes = {
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.number])
    };

    render() {
        return (
            <View style={[styles.card, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}