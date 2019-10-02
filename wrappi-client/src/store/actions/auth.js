import { apiCall, setTokenHeader } from "../../services/requests";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function setAuthorizationToken(token) {
    setTokenHeader(token);
};

export function authenticateUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
<<<<<<< HEAD
            return apiCall("post", "/login", userData)
            .then(({token, ...user}) => {
=======
            return apiCall("post", `/login`, userData).then(({token, ...user}) => {
>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
<<<<<<< HEAD
            })
            .catch((error) => {
=======
            }).catch((error) => {
>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda
                dispatch(addError(error.message));
                reject(); // kertoo että backend pyyntö epäonnistui.
            });
        });
    }
};