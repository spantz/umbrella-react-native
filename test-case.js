"use strict";

beforeAll(() => {
    console.error = function (message) {
        throw new Error(message);
    };
});

export default class TestCase {
    static getRenderedProps(component) {
        return component._component._instance.props.props;
    }

    static getChildren(component) {
        return this.getJSON(component).children;
    }

    static getJSON(component) {
        return component.toJSON();
    }
}