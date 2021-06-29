export const ADD_SPORT_EVENT = 'ADD_SPORT_EVENT';
export const RESET_MATRIX = 'RESET_MATRIX';

const initialState = [[]];

const sportEventNodesMatrixReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case ADD_SPORT_EVENT: {
      return [...action.payload];
    }

    case RESET_MATRIX: {
      return [[]];
    }

    default:
      return state;
  }
};

export default sportEventNodesMatrixReducer;