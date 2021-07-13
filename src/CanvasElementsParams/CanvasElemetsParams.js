import transliterate from "../utils/transliterate";
import data from "./data";

const CanvasElementsParams = {
  getMainParams(format) {
    const mainParamsStr = JSON.stringify(data[format].mainParams);
    return JSON.parse(mainParamsStr);
  },

  getMainBg(sport, format) {
    sport = transliterate(sport).toLowerCase();
    const mainBackgroundStr = JSON.stringify(data[format].mainBackground);
    const mainBackground = JSON.parse(mainBackgroundStr);
    const params = mainBackground[sport] || mainBackground['default'];

    return {
      ...params
    };
  },

  getOneMatchRivals(format) {
    const rivalsString = JSON.stringify(data[format].rivals.oneMatch);
    return JSON.parse(rivalsString);
  },

  getSeveralMatchesRivals(format) {
    const rivalsString = JSON.stringify(data[format].rivals.severalMatches);
    return JSON.parse(rivalsString);
  },

  getLineOnCenter(sport, format) {
    sport = transliterate(sport).toLowerCase();

    const lineOnCenterStr = JSON.stringify(data[format].lineOnCenter);
    const lineOnCenter = JSON.parse(lineOnCenterStr);
    const params = lineOnCenter[sport] || lineOnCenter['default'];

    return {
      ...params
    };
  },

  getSportEquipment(sport, format) {
    sport = transliterate(sport).toLowerCase();
    const sportEquipmentStr = JSON.stringify(data[format].sportEquipment);
    const sportEquipmentObj = JSON.parse(sportEquipmentStr);
    const sportEquipment = sportEquipmentObj[sport] || sportEquipmentObj['default'];

    return {
      ...sportEquipment
    };
  },

  getStartDate(format) {
    format = transliterate(format).toLowerCase();
    return {
      ...data[format].startDate
    };
  },

  getStartTime(format) {
    format = transliterate(format).toLowerCase();
    return {
      ...data[format].startTime
    };
  },

  getTournament(tournament, format) {
    tournament = transliterate(tournament).toLowerCase();
    const tournamentStr = JSON.stringify(data[format].tournament);
    const tournamentObj = JSON.parse(tournamentStr);
    return {
      ...tournamentObj[tournament]
    }
  },

  getRivalsBg(tournament, format) {
    tournament = transliterate(tournament).toLowerCase();
    const commonDecorStr = JSON.stringify(data[format].rivals.severalMatches.commonDecor);
    const commonDecor = JSON.parse(commonDecorStr);

    for ( const key of Object.keys(commonDecor) ) {
      if ( tournament.includes(key) ) {
        return commonDecor[key];
      }
    }

    return commonDecor['default'];
  }
}

export default CanvasElementsParams;