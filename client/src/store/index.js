import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

export const Target = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_TARGET", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_TARGET", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_TARGET", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_TARGET", payload: false });
      });
  };
};

export const Wajib = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_WAJIB", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_WAJIB", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_WAJIB", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_WAJIB", payload: false });
      });
  };
};

export const Optional = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_OPTIONAL", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_OPTIONAL", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_OPTIONAL", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_OPTIONAL", payload: false });
      });
  };
};

export const RewardsData = (url) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING_REWARDS", payload: true });
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA_REWARDS", payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({ type: "SET_ERROR_REWARDS", payload: error });
      })
      .finally(() => {
        dispatch({ type: "SET_LOADING_REWARDS", payload: false });
      });
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
