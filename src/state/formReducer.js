import { actionTypes } from "./actionTypes";

// Initial State
export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

// Reducer Function
export const reducer = (state, action) => {
  console.log("Action inside Reducer: ", action);

  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        // Dynamically setting object name and value
        [action.payload.name]: action.payload.value,
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    case actionTypes.TERM:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};
