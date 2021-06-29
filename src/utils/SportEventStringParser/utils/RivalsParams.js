import CanvasElementsParams from "../../../CanvasElementsParams/CanvasElemetsParams";
import RivalImgUrl from "./RivalImgUrl";
import RivalColor from "./RivalColor";
import getRandomNum from "../../getRandomNum";
import transliterate from "../../transliterate";

const RivalsParams = {
  async getParams(rivalsNames, kindOfSport, tournament, format) {
    this.format = format;

    if ( rivalsNames.length <= 2 ) {
      // one match
      return this.getOneMatchParams(rivalsNames, kindOfSport);
    } else {
      // several matches
      return this.getSeveralMatchesParams(tournament, rivalsNames,);
    }
  },

  async getOneMatchParams(rivalsNames, kindOfSport) {
    const rivals = [];
    const rivalsParams = CanvasElementsParams.getOneMatchRivals(this.format);

    for ( let i = 0; i < 2; i += 1 ) {
      const rivalParamsString = JSON.stringify(rivalsParams[i]);
      const rivalParams = JSON.parse(rivalParamsString);

      rivalParams.logo.url = await RivalImgUrl.getImgUrl(rivalsNames[i], kindOfSport);
      rivalParams.bgRect.fill = await RivalColor.getRivalColor(rivalsNames[i], kindOfSport);
      rivalParams.name.text = rivalsNames[i].toUpperCase();

      rivals.push(rivalParams);
    }

    kindOfSport = transliterate(kindOfSport).toLowerCase();
    if ( kindOfSport === 'ufc' || kindOfSport === 'boks' ) {
      rivals[0].bgRect.fill = 'red';
      rivals[1].bgRect.fill = 'blue';
    }

    return rivals;
  },

  getSeveralMatchesParams(tournament, rivalsNames) {
    const rivals = [];
    const rivalsParams = CanvasElementsParams.getSeveralMatchesRivals(this.format);
    let newTournament = null;
    tournament = transliterate(tournament).toLowerCase();

    for ( const key of Object.keys(rivalsParams.commonDecor) ) {
      if ( tournament.includes(key) ) {
        newTournament = key;
      }
    }

    if ( newTournament === null ) {
      newTournament = 'default';
    }

    for ( let i = 0; i < rivalsNames.length; i += 2 ) {
      const rivalsItem = {};

      rivalsItem.decor = {};
      rivalsItem.decor = {
        rect: { ...rivalsParams.commonDecor[newTournament].rect },
        dash: { ...rivalsParams.commonDecor[newTournament].dash }
      };

      rivalsItem.decor.rect.y = rivalsParams.decor[i * 0.5].rect.y;
      rivalsItem.decor.dash.y = rivalsParams.decor[i * 0.5].dash.y;

      rivalsItem.rivals = [];

      for ( let j = 0; j < 2; j += 1 ) {
        rivalsItem.rivals[j] = {};

        rivalsItem.rivals[j] = rivalsParams.rivalsNames[i * 0.5][j];
        rivalsItem.rivals[j] = rivalsParams.rivalsNames[i * 0.5][j];

        rivalsItem.rivals[j].text = rivalsNames[i + j].toUpperCase();
        rivalsItem.rivals[j].key = rivalsNames[i + j] + '_' + getRandomNum(100, 999);
      }

      rivals.push(rivalsItem);
    }

    return rivals;
  }
};

export default RivalsParams;