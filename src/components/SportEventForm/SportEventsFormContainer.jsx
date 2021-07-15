import { connect } from "react-redux";
import SportEventsForm from "./SportEventsForm";
import { addNewSportEvents } from "../../redux/reducers/sportsEventReducer/sportEventsActionCreators";
import { setFormatActionCreator } from "../../redux/reducers/formatReducer/formatReducer";

const eventsRowsSeparator = '+';

const mapStateToProps = state => {
  let cachedEventsList = window.localStorage.getItem('eventsList');

  if ( cachedEventsList ) {
    const eventRowsSeparatorRegExp = new RegExp('\\' + eventsRowsSeparator, 'g');
    cachedEventsList = cachedEventsList.replace(eventRowsSeparatorRegExp, '\n');
  }

  return {
    format: state.format,
    textareaDefaultVal: cachedEventsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewSportEvents: (sportEventsStrings) => {
      window.localStorage.setItem('eventsList', sportEventsStrings.split('\n').join(eventsRowsSeparator))
      dispatch(addNewSportEvents(sportEventsStrings));
    },
    setFormat: format => dispatch(setFormatActionCreator(format))
  }
};

const SportEventsFormContainer = connect(mapStateToProps, mapDispatchToProps)(SportEventsForm);

export default SportEventsFormContainer;