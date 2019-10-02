import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
<<<<<<< HEAD
window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
=======
>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda

export function configureStore() {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};