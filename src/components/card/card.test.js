import { shallow } from "enzyme";
import React from "react";
import { Card } from "./card.component";

it("Testing Card component", () => {
	expect(shallow(<Card />)).toMatchSnapshot();
});
