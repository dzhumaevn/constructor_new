import { ADD_COMPONENTS, ADD_LOADING_PROMISE, SET_COMPONENTS_LOADING_STATUS } from "./componentsReducer";

export const setComponentsLoadingStatusActionCreator = status => {
  return dispatch => dispatch({ type: SET_COMPONENTS_LOADING_STATUS, payload: status });
};

export const addComponentsActionCreator = components => {
  return dispatch => dispatch({ type: ADD_COMPONENTS, payload: components });
};

export const addComponentsLoadingPromiseActionCreator = promise => {
  return dispatch => dispatch({ type: ADD_LOADING_PROMISE, payload: promise });
};