/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import checkPropsType from "check-prop-types";

export const DeliveryContext = React.createContext({
  deliveryId: localStorage.getItem("currentId"),
  setDeliveryId: (id) => {},
});

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropsType(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsError;
};

export const findByDataAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
