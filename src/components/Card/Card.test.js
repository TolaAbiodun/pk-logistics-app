import React from "react";
import { findByDataAttr, checkProps } from "../../helpers";
import { shallow } from "enzyme";
import Card from "./index";
import "../../setupTests";

describe("Shared Card component", () => {
  describe("Checking props types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        clickable: true,
        customer: 'Tola Abiodun',
        address: "3456 Kinsway",
        city: "Lagos",
        zipCode: "200131",
        latitude: "5.678",
        longitude: "34.56",
      };
      const propsErrors = checkProps(Card, expectedProps);
      expect(propsErrors).toBeUndefined();
    });
  });
});

describe("Renders without error", () => {
  let wrapper;
  let mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      text: "Adetola",
      callback: mockFunc,
    };
    wrapper = shallow(<Card {...props} />);
  });
  
  it("Should render a card", async () => {
    const card = await findByDataAttr(wrapper, "div");
    expect(card.length).toBe(0);
  });
});