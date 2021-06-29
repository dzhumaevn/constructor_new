const ADD_STAGE = 'ADD_STAGE';

const initialState = {};

const stageReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case ADD_STAGE: {
      return action.payload;
    }

    default:
      return state;
  }
};

export const addStageActionCreator = (stage) => ({ type: ADD_STAGE, payload: stage });
export default stageReducer;