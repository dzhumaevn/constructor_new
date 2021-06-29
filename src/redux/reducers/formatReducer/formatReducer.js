export const SET_FORMAT = 'SET_FORMAT';

const initialState = 'stories';

const formatReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SET_FORMAT: {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export const setFormatActionCreator = format => ({ type: SET_FORMAT, payload: format });

export default formatReducer;