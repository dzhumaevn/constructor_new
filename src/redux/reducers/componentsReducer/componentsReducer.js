export const SET_COMPONENTS_LOADING_STATUS = 'SET_COMPONENTS_LOADING_STATUS';
export const ADD_COMPONENTS = 'ADD_COMPONENTS';
export const ADD_LOADING_PROMISE = 'ADD_LOADING_PROMISE';

const initialState = { components: null, loading: false, loadingPromise: null };

const componentsReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SET_COMPONENTS_LOADING_STATUS: {
      return {
        ...state,
        loading: action.payload
      };
    }

    case ADD_LOADING_PROMISE: {
      return {
        ...state,
        loadingPromise: action.payload
      };
    }

     case ADD_COMPONENTS: {
      return {
        ...state,
        components: action.payload
      };
    }

    default:
      return state;
  }
};

export default componentsReducer;