import React from "react";
import PropTypes from "prop-types";

// Import styles from
import { Wrapper, Content } from "./Grid.styles";

// Grid component
const Grid = ({ header, children }) => (
  <Wrapper>
    <h3 className="p-2">{header}</h3>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string,
}
export default Grid;
