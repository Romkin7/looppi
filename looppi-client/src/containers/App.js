import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import Main from "./Main";
import {BrowserRouter as Router } from "react-router-dom";
import Footer from './Footer';

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
          <Footer 
                copyrightText="Copyright © 2019 Roman Tuomisto & Pauliina Veijalainen"
                copyrightText2="All rights reserved.">
            </Footer>
        </Router>
      </div>
    </Provider>
  );
};

export default App;