import { useState} from "react";
import { useGetAllDeliveriesQuery } from '../services/deliveries';
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

// Components
import Grid from "./Grid";
import Card from "./Card";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const DeliveryListings = () => {
  const responseInfo = useGetAllDeliveriesQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Page is Loading
  if (responseInfo.isLoading)
    return (
      <div className="container">
        <Spinner />
      </div>
    );

  // Error Page
  if (responseInfo.isError)
    return (
      <div className="container">
        <p>An Error Occured</p>
      </div>
    );

  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = responseInfo.data.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <Grid header="Delivery Listings">
        {currentPosts.map((delivery, i) => (
          <div key={i}>
            <Link
              to={`/deliveries/${delivery.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                clickable
                customer={delivery.customer}
                address={delivery.address}
                city={delivery.city}
                zipCode={delivery.zipCode}
                latitude={delivery.latitude}
                longitude={delivery.longitude}
              />
            </Link>
          </div>
        ))}
      </Grid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={responseInfo.data.length}
        paginate={paginate}
      />
    </>
  );
};

DeliveryListings.propTypes = {
  id: PropTypes.string,
  customer: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default DeliveryListings;
