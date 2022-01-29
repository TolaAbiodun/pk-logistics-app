import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { saveState } from "./app/browser-storage";
import { debounce } from "debounce";
import  { store } from './app/store';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

// Subscribe to the store changes
store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
