import React from "react";
import { findByDataAttr, checkProps } from "../../helpers";
import { shallow } from "enzyme";
import Button from "./index";
import "../../setupTests";


describe("Shared button component", () => {
  describe("Checking props types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        text: "Example button text",
        callback: () => {},
      };
      const propsErrors = checkProps(Button, expectedProps);
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
    wrapper = shallow(<Button {...props} />);
  });

  it("Should render a card", async () => {
    const card = await findByDataAttr(wrapper, "div");
    expect(card.length).toBe(0);
  });
});
