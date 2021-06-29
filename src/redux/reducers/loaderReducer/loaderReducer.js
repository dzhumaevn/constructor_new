const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

const initialState = { isLoading: false };

const loaderReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SET_LOADING_STATUS: {
      const stateCopy = { ...state };
      stateCopy.isLoading = action.isLoading;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const setLoadingStatusActionCreator = isLoading => ({ type: SET_LOADING_STATUS, isLoading });
export default loaderReducer;