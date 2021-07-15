import ComponentsService from "../../ComponentsService";
import transliterate from "../../transliterate";
import ls from '../../../assets/images/logo_liga_stavok.svg'

const RivalImgUrl = {
  data: {
    localImgUrls: {},
    headersProps: {
      headers: {
        'X-FIGMA-TOKEN': '195627-721408ff-59ff-4d99-91b0-ce19b74108f5',
      },
    },
    generateRequestImgUrl: (imgFigmaId) =>
      `https://api.figma.com/v1/images/ZHZl2ws4PRdZex0PMcun5I?ids=${ imgFigmaId }&scale=4&format=svg&`,
  },

  async getImgUrl(rivalName, kindOfSport) {
    rivalName = transliterate(rivalName.toLowerCase());
    kindOfSport = transliterate(kindOfSport).toLowerCase();
    const components = await ComponentsService.getComponents(kindOfSport);

    return components[rivalName] ? await this.requestImgUrl(components[rivalName]) : ls;
  },

  async requestImgUrl(componentId) {
    let body,
        res;

    try {
      res = await fetch(this.data.generateRequestImgUrl(componentId), this.data.headersProps);
    } catch ( error ) {
      throw error;
    }

    try {
      body = await res.json();
    } catch ( error ) {
      throw error;
    }

    return body.images[componentId];
  }
};

export default RivalImgUrl;

