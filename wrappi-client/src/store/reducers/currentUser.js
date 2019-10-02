import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
<<<<<<< HEAD
      case SET_CURRENT_USER:
        return {
          // turn empty object into false or if there are keys, true
          isAuthenticated: !!Object.keys(action.user).length,
          user: action.user
        };
      default:
        return state;
    }
  };
=======
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
};
>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda
