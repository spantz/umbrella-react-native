"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    LayoutAnimation,
    Image,
    ScrollView
} from "react-native";
import AnimationFactory from "../../resources/factories/animations";
import { Global } from "../../resources/styles";
import { sun, hill, cards } from "../../resources/images";

import InfoScreen from "../screens/InfoScreen";
import ActivityHomeScene from "./ActivityHomeScene";

import { Card, Button, Hero } from "../components";


const animations = {
    sun: new AnimationFactory({ top: [400, 300], left: [-200, 105] }),
    hill: new AnimationFactory({ opacity: [0, 1] })
}

const styles = StyleSheet.create({
    sun: {
        position: "absolute",
    },  
    hill: {
        position: "absolute",
        right: 0,
        bottom: 0
    },
    cardHero: {
        textAlign: "center",
        color: "#000"
    },
    cardSubHero: {
        textAlign: "center",
        color: "#888",
        fontSize: 14
    }
});

export default class InfoScene extends React.Component {
    swiper: Swiper;

    constructor(props) {
        super(props);

        this.goForward = this.goForward.bind(this);
        this.onSwiperMount = this.onSwiperMount.bind(this);
        this.goToActivityIntro = this.goToActivityIntro.bind(this);
    }

    goForward() {
        this.swiper.scrollBy(1);
    }

    onSwiperMount(swiper: Swiper) {
        this.swiper = swiper;
    }

    goToActivityIntro() {
        this.props.navigator.push({
            index: 1,
            component: ActivityHomeScene,
            reset: true
        });
    }

     componentDidMount() {
        Animated.sequence([         
            animations.hill.sequence,
            animations.sun.parallel          
        ]).start();
    }

    render() {

        return (
            <Swiper showsPagination={false} loop={false} ref={this.onSwiperMount}>
                <View style={[Global.Grid.column]}>
                    <Animated.Image source={sun} style={[styles.sun, animations.sun.styles]}/>
                    <Animated.Image source={hill} style={[styles.hill, animations.hill.styles]}/>
                    <Hero style={{ marginTop: 30 }}>
                        Umbrella is here to help you reduce your anxiety, feel better about yourself, and have a brighter day.
                    </Hero>
                    
                    <View style={[Global.View.container, Global.Grid.justifyEnd, { marginBottom: 10, flex: 1 }]}>
                        <Button text="Sounds Cool" style={[]} onPress={this.goForward} />
                    </View>
                </View>
                <View style={[Global.Grid.column]}>
                    <Hero style={{ marginTop: 30, paddingBottom: 0, marginBottom: 0 }}>
                        We've got lots of activities to help you out.
                    </Hero>
                    <View>
                        <ScrollView
                        directionalLockEnabled={true}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}>
                        <Card>
                            <Image source={cards.breathe}/>
                        </Card>
                        <Card>
                            <Image source={cards.mood}/>
                        </Card>
                        <Card>
                            <Image source={cards.blank}/>                            
                        </Card>
                    </ScrollView>
                    </View>
                    <View style={[Global.View.container, Global.Grid.justifyEnd, { marginBottom: 10 }]}>
                        <Button text="Awesome, let's get started" onPress={this.goToActivityIntro} />
                    </View>
                </View>
            </Swiper>
        );
    }
}
