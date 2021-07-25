import { setLoadingProgress, setLoadingStatusActionCreator } from "../loaderReducer/loaderReducer";
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
    const sportEventsStrings = sportEvents.split('\n');

    const totalSportEvents = format !== 'push' ? sportEventsStrings.length : sportEventsStrings.length * 2;
    let sportEventRenderedCount = 0;

    const fillParsedSportEventsArr = async (format) => {
      for ( const sportEventString of sportEvents.split('\n') ) {
        const sportEvtStringParser = new SportEventStringParser();

        try {
          const sportEvent = await sportEvtStringParser.getSportEvent(sportEventString, format);
          dispatch(addSportEventToPositionsMatrix(sportEvent));
          parsedSportEvents.push(sportEvent);
        } catch ( e ) {

          const messageBox = new MessageBox('.msgbox-area', { closeTime: 0 });
          messageBox.show(
            `Упс! Что-то пошло не так. Попробуйте проверить имя события <span>"${ sportEventString.trim() }"</span> либо уберите его.`,
            'Закрыть');

          console.error(e);
        }

        sportEventRenderedCount += 1;
        dispatch(setLoadingProgress(totalSportEvents, sportEventRenderedCount));
      }
    };

    // reset progress loader
    dispatch(setLoadingProgress(100, 0));

    await fillParsedSportEventsArr(format);
    if ( format === 'push' ) await fillParsedSportEventsArr('webPush');

    dispatch({ type: ADD_NEW_SPORT_EVENTS, sportEvents: parsedSportEvents });
    dispatch(setLoadingStatusActionCreator(false));
  };
};