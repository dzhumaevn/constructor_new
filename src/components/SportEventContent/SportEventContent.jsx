import MainBackground from "../MainBackground/MainBackground";
import RivalsContainer from "../Rivals/RivalsContainer";
import LineOnCenter from "../LineOnCenter/LineOnCenter";
import Date from "../Date/Date";
import Tournament from "../Tournament/Tournament";
import SportEquipment from "../SportEquipment/SportEquipment";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import LsLogo from "../LsLogo/LsLogo";
import Coefficients from "../Coefficients/Coefficients";
import CtaButton from "../CtaButton/CtaButton";

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

  const lsLogo = params.lsLogo;
  const coefficients = params.coefficients;
  const ctaButton = params.ctaButton;

  return (
    <ErrorBoundary FallbackComponent={ () => <ErrorFallback sportEvent={ props.sportEvent } /> }>
      <MainBackground name='mainBackground' { ...mainBackground } />
      <RivalsContainer tournament={ tournament.text } isOneMatch={ isOneMatch }
                       rivalsBg={ rivalsBg } rivals={ rivals }
      />
      <LineOnCenter params={ lineOnCenter } />
      <SportEquipment params={ sportEquipment } />
      <Date startDate={ startDate } startTimeValue={ startTime.text }
            isOneMatch={ params.isOneMatch } isWebPush={ params.format === 'webPush' }
            isMarketingtv={ params.format === 'marketingtv' }
      />
      <Tournament params={ tournament }
                  isOneMatch={ params.isOneMatch } isWebPush={ params.format === 'webPush' }
      />

      { lsLogo && <LsLogo params={ lsLogo } /> }
      { coefficients && <Coefficients params={ coefficients } /> }
      { ctaButton && <CtaButton params={ ctaButton } /> }
    </ErrorBoundary>
  );
};

export default SportEventContent;