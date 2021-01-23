const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function rewards(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_REWARDS":
      return { ...state, data: action.payload };
    case "SET_LOADING_REWARDS":
      return { ...state, loading: action.payload };
    case "SET_ERROR_REWARDS":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
