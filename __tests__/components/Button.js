import "react-native";
import React from "react";
import Button from "../../src/react/components/Button";
import TestCase from "../../test-case";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("fails without required props", function () {
    expect(() => {
        renderer.create(<Button text="Hello"/>);
    }).toThrowError(/Required prop `onPress` was not specified/);

    expect(() => {
        renderer.create(<Button onPress={() => {}}/>);
    }).toThrowError(/Required prop `text` was not specified/);
});

it("renders correctly", function () {
    const onPress = () => {};
    const button = renderer.create((
        <Button
            onPress={onPress}
            text="Hello"
            />
    ));

    const props = TestCase.getRenderedProps(button);

    expect(button).toBeDefined();
    expect(props.onPress).toEqual(onPress);
    expect(props.text).toEqual("Hello");
});