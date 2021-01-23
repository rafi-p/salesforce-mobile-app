const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function optional(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_OPTIONAL":
      return { ...state, data: action.payload };
    case "SET_LOADING_OPTIONAL":
      return { ...state, loading: action.payload };
    case "SET_ERROR_OPTIONAL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
