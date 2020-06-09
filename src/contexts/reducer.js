export default (state, action) => {
  switch (action.type) {
    case "SET_CAPITALS":
      return {
        ...state,
        capitals: action.payload,
      };
    default:
      return state;
  }
};
