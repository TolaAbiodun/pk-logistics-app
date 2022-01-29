import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {DeliveryContext} from './helpers';

// Components
import DeliveryListings from "./components/DeliveryListings";
import DeliveryDetails from "./components/DeliveryDetails"
import ErrorPage from './components/ErrorPage';


const App = () => {
  const initial = localStorage.getItem("currentId")
    ? localStorage.getItem("currentId")
    : -1;
  const [deliveryId, setDeliveryId] = useState(initial);

    return (
      <DeliveryContext.Provider value={{ deliveryId, setDeliveryId }}>
        <Router>
          <Routes>
            <Route path="/" element={<DeliveryListings />} />
            <Route path="/deliveries/:id" element={<DeliveryDetails />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </DeliveryContext.Provider>
    );
}

export default App;
