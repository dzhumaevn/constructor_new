import { ADD_SPORT_EVENT, RESET_MATRIX } from "./sportEventNodesMatrixReducer";

export const addSportEventToPositionsMatrix = (sportEvent) => {
  return (dispatch, getState) => {
    const matrix = [...getState().sportEventNodesMatrix];
    const lastRow = matrix[matrix.length - 1];

    if ( lastRow.length === 6 ) {
      matrix.push([sportEvent]);
    } else {
      const i = matrix.length - 1;
      const j = lastRow.length;

      matrix[i][j] = sportEvent;
    }

    dispatch({ type: ADD_SPORT_EVENT, payload: matrix });
  };
};

export const resetMatrixActionCreator = () => dispatch => dispatch({ type: RESET_MATRIX });