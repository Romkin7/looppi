import { apiCall, setTokenHeader } from "../../services/requests";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
    return ({
        type: SET_CURRENT_USER,
        user
    });
}

export function setAuthorizationToken(token) {
    setTokenHeader(token);
};

export function authenticateUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", "/login", userData).then(({token, ...user}) => {
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            }).catch((error) => {
                dispatch(addError(error.message));
                reject(); // kertoo että backend pyyntö epäonnistui.
            });
        });
    }
};