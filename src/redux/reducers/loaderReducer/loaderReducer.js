const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
const SET_LOADING_PROGRESS = 'SET_LOADING_PROGRESS';

const initialState = { isLoading: false, progressValue: 0 };

const loaderReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SET_LOADING_STATUS: {
      const stateCopy = { ...state };
      stateCopy.isLoading = action.isLoading;
      return stateCopy;
    }

    case SET_LOADING_PROGRESS: {
      const stateCopy = { ...state };
      stateCopy.progressValue = action.progressValue;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const setLoadingStatusActionCreator = isLoading => ({ type: SET_LOADING_STATUS, isLoading });
export const setLoadingProgress = (totalCount, currentCount) => {
  const progressValue = Math.round((currentCount / totalCount) * 100);
  return { type: SET_LOADING_PROGRESS, progressValue };
};

export default loaderReducer;