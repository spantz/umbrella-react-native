'use strict';
// @flow

import React from 'react';
import Swiper from 'react-native-swiper';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

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
            <Swiper showsPagination={true} loop={false} ref={this.onSwiperMount}>
                <View>
                    <Text>
                        Umbrella is here to help you reduce your anxiety, feel better about yourself, and have a brighter day.
                    </Text>
                    <TouchableOpacity onPress={this.goForward}>
                        <Text>
                            Cool
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Two</Text>
                    <TouchableOpacity onPress={this.goForward}>
                        <Text>
                            Great
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Three</Text>
                </View>
            </Swiper>
        );
    }
}