import "react-native";
import Card from "../../src/react/components/Card";
import {Text} from "react-native";
import TestCase from "../../test-case";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", function () {
    expect(renderer.create(<Card />)).toBeDefined();
});

it("renders child components", function () {
    const card = renderer.create(<Card><Text>Hello!</Text></Card>);
    const children = TestCase.getChildren(card);

    expect(children.length).toEqual(1);

    const child = children[0];
    expect(child.type).toEqual("Text");
    expect(child.children[0]).toEqual("Hello!");
});