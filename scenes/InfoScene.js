"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import GlobalStyles from "./../resources/styles/global";
import InfoScreen from "./screens/InfoScreen";

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: "center"
    }
});

export default class InfoScene extends React.Component {
    swiper: Swiper;

    constructor(props) {
        super(props);

        this.goForward = this.goForward.bind(this);
        this.onSwiperMount = this.onSwiperMount.bind(this);
    }

    goForward() {
        this.swiper.scrollBy(1);
    }

    onSwiperMount(swiper: Swiper) {
        this.swiper = swiper;
    }

    render() {
        return (
            <Swiper showsPagination={true} loop={false} ref={this.onSwiperMount} style={[GlobalStyles.layout.root]}>
                <InfoScreen style={styles.flex}
                    hero="Umbrella is here to help you reduce your anxiety, feel better about yourself, and have a brighter day."
                    onPress={this.goForward}
                    buttonText="Cool"
                    />
                <InfoScreen style={styles.flex}
                    hero="Use us in the moment when you're having a bad day."
                    subHero="We'll help you relax and calm down when you're struggling."
                    onPress={this.goForward}
                    buttonText="Great"
                    />
                <InfoScreen style={styles.flex}
                    hero="Use us every day to build a brighter future."
                    subHero="Check in with us to view long-term goals, progress, and work towards a happier you."
                    buttonText="Show Me How"
                    />
            </Swiper>
        );
    }
}