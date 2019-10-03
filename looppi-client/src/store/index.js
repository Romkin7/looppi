import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export function configureStore() {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};