const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function wajib(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA_WAJIB":
      return { ...state, data: action.payload };
    case "SET_LOADING_WAJIB":
      return { ...state, loading: action.payload };
    case "SET_ERROR_WAJIB":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
