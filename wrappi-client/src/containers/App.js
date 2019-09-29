import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import Main from "./Main";
import {BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // Prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(error) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    </Provider>
  );
};

export default App;