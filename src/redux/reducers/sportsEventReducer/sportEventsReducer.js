// import barselona from '../../../images/barselona.svg';
// import real_madrid from '../../../images/real-madrid.svg';
// import footballSportEquipment from "../../../images/sports_equipment/football.svg";
// import lc from '../../../images/uefa_lc.jpeg';

export const ADD_NEW_SPORT_EVENTS = 'ADD_NEW_SPORT_EVENTS';

const initialState = [];

const sportEventsReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case ADD_NEW_SPORT_EVENTS: {
      return action.sportEvents;
    }

    default:
      return state;
  }
};

export default sportEventsReducer;