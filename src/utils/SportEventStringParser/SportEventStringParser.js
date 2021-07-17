import transliterate from "../transliterate";
import getRandomNum from "../getRandomNum";
import CanvasElementsParams from "../../CanvasElementsParams/CanvasElemetsParams";
import store from "../../redux/store";
import RivalsParams from "./utils/RivalsParams";

class SportEventStringParser {
  async parse(stringData, format) {
    this.format = format;
    const [ sport, tournament, rivalsNames, dateAndTime ] = this.parseString(stringData);

    const info = {};
    info.inputStringData = stringData;
    info.kindOfSport = sport;
    info.tournament = tournament;
    info.rivalsNames = this.rivalsNamesConvertToArr(rivalsNames);
    info.startDate = this.getDate(dateAndTime);
    info.startTime = this.getTime(dateAndTime);

    let params = {};
    params.mainParams = this.getMainParams();
    params.format = format;
    params.rivals = await this.getRivalsParams(rivalsNames, sport, tournament);
    params.fileName = this.getFilename(sport, tournament, rivalsNames, dateAndTime, format);
    params.id = this.getId(rivalsNames);
    params.isOneMatch = this.rivalsNamesConvertToArr(rivalsNames).length <= 2;

    const canvasParams = {};
    canvasParams.lineOnCenter = this.getLineOnCenter(sport);
    canvasParams.mainBackground = this.getMainBackground(sport);
    canvasParams.rivalsBg = this.getRivalsBg(tournament);
    canvasParams.sportEquipment = this.getSportEquipment(sport);
    canvasParams.startDate = this.getStartDate();
    canvasParams.startTime = this.getStartTime();
    canvasParams.tournament = this.getTournament(tournament);
    canvasParams.lsLogo = this.getLsLogo();
    canvasParams.coefficients = this.getCoefficients();
    canvasParams.ctaButton = this.getCtaButton();

    params = {
      ...params,
      ...canvasParams,
    };

    return { info, params };
  }

  async getSportEvent(stringData, format) {
    return await this.parse(stringData, format);
  }

  parseString(string) {
    let [ sport, tournament, rivalsNames, dateAndTime ] = string.split(';').map(item => item.trim());

    if ( !sport ) {
      throw new Error('Ошибка в событии ' + (string) + ': Вид спорта не введён.');
    }

    return [ sport, tournament, rivalsNames, dateAndTime ];
  }

  getMainParams() {
    const matrix = store.getState().sportEventNodesMatrix;

    const lastRow = matrix[matrix.length - 1];
    const lastRowItemsCount = matrix[matrix.length - 1].length;

    let x;
    let y;

    if ( lastRowItemsCount === 6 ) {
      x = 0;
      y = matrix.length;
    } else {
      x = lastRow.length;
      y = matrix.length - 1;
    }

    const { width, height } = CanvasElementsParams.getMainParams(this.format);

    x *= width + 30;
    y *= height + 30;

    return { x, y, width, height };
  }

  rivalsNamesConvertToArr(rivals) {
    const rivalsSeparator = /\s?[-–—]\s?/;
    const rivalsList = [];

    if ( !rivals.includes(',') ) {
      const [ leftRivalName, rightRivalName ] = rivals.split(rivalsSeparator);
      rivalsList.push(leftRivalName);
      rivalsList.push(rightRivalName);
    } else {
      rivals.split(',').forEach(item => {
        const subRivals = [];
        item.split(rivalsSeparator).forEach(subItem => {
          subRivals.push(subItem.trim());
        });

        rivalsList.push(subRivals[0]);
        rivalsList.push(subRivals[1]);
      });
    }

    return rivalsList;
  }

  getDate(string) {
    const dateRegExp = /\d+\s\D+/;
    let date = string.match(dateRegExp);

    return date ? date[0].trim() : '';
  }

  getTime(string) {
    const timeRegExp = /\d\d:\d\d/;
    let time = string.match(timeRegExp);

    return time ? time[0].trim() : '';
  }

  async getRivalsParams(rivalsNames, kindOfSport, tournament) {
    rivalsNames = this.rivalsNamesConvertToArr(rivalsNames);
    return RivalsParams.getParams(rivalsNames, kindOfSport, tournament, this.format);
  }

  getFilename(kindOfSport, tournament, inputRivalsNames, dateAndTime, format) {
    switch ( format ) {
      case 'stories':
        format = 'liga_match_stories_1125_2436';
        break;
      case 'push':
        format = 'liga_match_push_1024_512';
        break;
      case 'webPush':
        format = 'WEB_liga_match_push_1360_680';
        break;
      case 'marketingtv':
        format = 'TV_liga_match';
        break;
      default:
        format = 'liga_match_stories_1125_2436';
    }

    const fileNameString = [
      format,
      kindOfSport,
      tournament,
      inputRivalsNames,
      dateAndTime
    ].join('-');
    const fileName = transliterate(fileNameString);
    return fileName.toLowerCase();
  }

  getId(rivalsNames) {
    rivalsNames = this.rivalsNamesConvertToArr(rivalsNames);

    const id =
            rivalsNames[0] +
            '_' + rivalsNames[1] +
            '_' + getRandomNum(1000, 9999);
    return transliterate(id).toLowerCase();
  }

  getLineOnCenter(sport) {
    return CanvasElementsParams.getLineOnCenter(sport, this.format);
  }

  getMainBackground(sport) {
    return CanvasElementsParams.getMainBg(sport, this.format);
  }

  getRivalsBg(tournament) {
    return CanvasElementsParams.getRivalsBg(tournament, this.format);
  }

  getSportEquipment(sport) {
    return CanvasElementsParams.getSportEquipment(sport, this.format);
  }

  getStartDate() {
    return CanvasElementsParams.getStartDate(this.format);
  }

  getStartTime() {
    return CanvasElementsParams.getStartTime(this.format);
  }

  getTournament(tournament) {
    return CanvasElementsParams.getTournament(tournament, this.format);
  }

  getLsLogo() {
    return CanvasElementsParams.getLsLogo(this.format);
  }

  getCoefficients() {
    return CanvasElementsParams.getCoefficients(this.format);
  }

  getCtaButton() {
    return CanvasElementsParams.getCtaButton(this.format);
  }
}

export default SportEventStringParser;