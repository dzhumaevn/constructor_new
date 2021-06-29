import MainBackground from "../MainBackground/MainBackground";
import RivalsContainer from "../Rivals/RivalsContainer";
import LineOnCenter from "../LineOnCenter/LineOnCenter";
import Date from "../Date/Date";
import Tournament from "../Tournament/Tournament";
import SportEquipment from "../SportEquipment/SportEquipment";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../ErrorFallback/ErrorFallback";

const SportEventContent = props => {
  const params = props.sportEvent.params;

  const isOneMatch = params.isOneMatch;
  const mainBackground = params.mainBackground;
  const rivals = params.rivals;
  const rivalsBg = params.rivalsBg;

  const lineOnCenter = params.lineOnCenter;
  const sportEquipment = params.sportEquipment;

  const startDate = params.startDate;
  startDate.text = props.sportEvent.info.startDate;

  const startTime = params.startTime;
  startTime.text = props.sportEvent.info.startTime;

  const tournament = params.tournament;
  tournament.text = props.sportEvent.info.tournament;

  return (
    <ErrorBoundary FallbackComponent={ () => <ErrorFallback sportEvent={ props.sportEvent } /> }>
      <MainBackground name='mainBackground' { ...mainBackground } />
      <RivalsContainer tournament={ tournament.text } isOneMatch={ isOneMatch }
                       rivalsBg={ rivalsBg } rivals={ rivals }
      />
      <LineOnCenter params={ lineOnCenter } />
      <SportEquipment params={ sportEquipment } />
      <Date startDate={ startDate } startTimeValue={ startTime.text } />
      <Tournament params={ tournament } />
    </ErrorBoundary>
  );
};

export default SportEventContent;