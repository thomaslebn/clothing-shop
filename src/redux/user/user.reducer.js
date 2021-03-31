import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// if state is undefined (first load of the app)
// get the value of INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  // action.type = describe the action
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      // need to return an object
      return {
        ...state,
        // action.payload = data that was send along the action
        currentUser: action.payload,
      };
    default:
      // if not update, return the state
      return state;
  }
};

export default userReducer;
