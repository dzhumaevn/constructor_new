import { setLoadingStatusActionCreator } from "../loaderReducer/loaderReducer";
import SportEventStringParser from "../../../utils/SportEventStringParser/SportEventStringParser";
import { ADD_NEW_SPORT_EVENTS } from "./sportEventsReducer";
import {
  addSportEventToPositionsMatrix,
  resetMatrixActionCreator
} from "../sportEventNodesMatrixReducer/sportEventNodesMatrixActionCreators";
import store from "../../store";
import MessageBox from "../../../MessageBox";

export const addNewSportEvents = (sportEvents) => {
  return async (dispatch) => {
    dispatch(setLoadingStatusActionCreator(true));
    dispatch(resetMatrixActionCreator());

    const format = store.getState().format;
    const parsedSportEvents = [];

    for ( const sportEventString of sportEvents.split('\n') ) {
      const sportEvtStringParser = new SportEventStringParser();

      try {
        if ( format !== 'push' ) {
          const sportEvent = await sportEvtStringParser.getSportEvent(sportEventString, format);
          dispatch(addSportEventToPositionsMatrix(sportEvent));
          parsedSportEvents.push(sportEvent);
        } else {
          const sportEventPush = await sportEvtStringParser.getSportEvent(sportEventString, 'push');
          dispatch(addSportEventToPositionsMatrix(sportEventPush));
          parsedSportEvents.push(sportEventPush);

          const sportEventWebPush = await sportEvtStringParser.getSportEvent(sportEventString, 'webPush');
          dispatch(addSportEventToPositionsMatrix(sportEventWebPush));
          parsedSportEvents.push(sportEventWebPush);
        }
      } catch ( e ) {

        const messageBox = new MessageBox('.msgbox-area', { closeTime: 0 });
        messageBox.show(
          `Упс! Что-то пошло не так. Попробуйте проверить имя события <span>"${ sportEventString.trim() }"</span> либо уберите его.`,
          'Закрыть');

        console.error(e);
      }
    }

    dispatch({ type: ADD_NEW_SPORT_EVENTS, sportEvents: parsedSportEvents });
    dispatch(setLoadingStatusActionCreator(false));
  };
};