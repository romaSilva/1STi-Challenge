export default (state, action) => {
  switch (action.type) {
    case "SET_CAPITALS":
      return {
        ...state,
        capitals: action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "SET_CARD":
      return {
        ...state,
        card: action.payload,
      };
    default:
      return state;
  }
};
