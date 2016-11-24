import {
    StyleSheet,
    Animated
} from "react-native";


class AnimationFactory {
    constructor(properties) {
        this.keys = Object.keys(properties);
        this.styles = {};
        this.triggers = [];

        for (let i = 0, j =  this.keys.length; i < j; i++) {
            const key = this.keys[i];
            const start = properties[key][0] || 0;
            const end = properties[key][1] || 0;

            Object.assign(this.styles, this.createStartStyleForProperty(key, start));
            this.triggers.push(this.createAnimationTrigger(key, end));
        };

        this.parallel = Animated.parallel(this.triggers);
        this.sequence = Animated.sequence(this.triggers);
    }

    createAnimationTrigger(key, value) {
        return Animated.spring(this.styles[key], { toValue: value });
    }

    createStartStyleForProperty(key, value) {
        var startStyle = {};
        startStyle[key] = new Animated.Value(value);
        return startStyle;
    }
}

export default AnimationFactory;