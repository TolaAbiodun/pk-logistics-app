import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title, Content } from "./Card.styles";

const Card = ({clickable, customer, address, city, zipCode, latitude, longitude}) => {
  return (
    <div>
      {clickable && (
          <Wrapper>
            <Title>{customer}</Title>
            <Content>Address: {address}</Content>
            <Content>City: {city}</Content>
            <Content>ZipCode: {zipCode}</Content>
            <Content>Latitude: {latitude}</Content>
            <Content>Longitude: {longitude}</Content>
          </Wrapper>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  customer: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  clickable: PropTypes.bool,
};

export default Card;
