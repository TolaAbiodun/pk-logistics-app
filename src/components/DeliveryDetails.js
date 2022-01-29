/* eslint-disable eqeqeq */
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  useGetDeliveryByIdQuery,
  useCreateDeliveryPostMutation,
} from "../services/deliveries";
import { DeliveryContext } from "../helpers";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Card from "./Card";
import Spinner from "./Spinner";

const DeliveryDetails = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [createDelivery] = useCreateDeliveryPostMutation();
  // Get Id of current delivery
  const { id } = useParams();
  // Get Response from API
  const responseInfo = useGetDeliveryByIdQuery(id);
  
  const { deliveryId, setDeliveryId } = useContext(DeliveryContext);
  // Show Spinner on loading
  if (responseInfo.isLoading)
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  
  const toggleButton = () => {
    setShowButtons(true);
    setDeliveryId(id);
    localStorage.setItem("currentId", id);
  };

  // Redirect to home page after deliveries

  return (
    <div className="container mt-5">
      {responseInfo.data !== undefined && (
        <Card
          key={id}
          clickable
          customer={responseInfo.data.customer}
          address={responseInfo.data.address}
          city={responseInfo.data.city}
          zipCode={responseInfo.data.zipCode}
          latitude={responseInfo.data.latitude}
          longitude={responseInfo.data.longitude}
        />
      )}
      <div>
        <button
          onClick={toggleButton}
          className="btn btn-primary mt-4 ml-5"
          style={{ display: deliveryId == -1 ? "inline" : "none" }}
        >
          Make Active
        </button>

        {localStorage.getItem("currentId") === id && showButtons && (
          <div className="d-flex">
            <Link to={"/"}>
              <button
                className="btn btn-success mt-4 ml-5"
                onClick={async () => {
                  setDeliveryId(-1);
                  localStorage.setItem("currentId", -1);
                  await createDelivery({
                    deliveryId: id,
                    status: ["delivered"],
                    latitude: responseInfo.data.latitude,
                    longitude: responseInfo.data.longitude,
                  });
                  alert("Successfull");
                }}
              >
                Delivered
              </button>
            </Link>

            <Link to={"/"}>
              <button
                className="btn btn-danger mt-4 ml-5"
                onClick={async () => {
                  setDeliveryId(-1);
                  localStorage.setItem("currentId", -1);

                  await createDelivery({
                    deliveryId: id,
                    status: ["undelivered"],
                    latitude: responseInfo.data.latitude,
                    longitude: responseInfo.data.longitude,
                  });
                  alert("Successfull");
                }}
              >
                Undelivered
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

DeliveryDetails.propTypes = {
  id: PropTypes.string,
  customer: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  delivery: PropTypes.object,
  clickable: PropTypes.bool,
};

export default DeliveryDetails;
