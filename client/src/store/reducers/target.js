const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function target(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_TARGET":
      return { ...state, data: action.payload };
    case "SET_LOADING_TARGET":
      return { ...state, loading: action.payload };
    case "SET_ERROR_TARGET":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
