import ComponentsService from "../../ComponentsService";
import transliterate from "../../transliterate";

const RivalColor = {
  _requestData: {
    headersProps: {
      headers: {
        'X-FIGMA-TOKEN': '181987-7f531538-aa5d-42bb-b44d-613d227e0822',
      },
    },
    generateRequestImgUrl: (imgFigmaId) =>
      `https://api.figma.com/v1/files/ZHZl2ws4PRdZex0PMcun5I/nodes?ids=${ imgFigmaId }&depth=1`,
  },

  async getRivalColor(rivalName, kindOfSport) {
    const processedRivalName = transliterate(rivalName.toLowerCase()),
          components         = await ComponentsService.getComponents(kindOfSport),
          name               = processedRivalName + '_color';

    return components[name] ? await this._requestRivalColor(components[name]) : '#41ff6d';
  },

  async _requestRivalColor(componentId) {
    const res = await fetch(this._requestData.generateRequestImgUrl(componentId), this._requestData.headersProps);
    const body = await res.json();

    const { r, g, b, a } = body.nodes[componentId].document.children[0].fills[0].color;

    return this._getRgbaString(r, g, b, a);
  },

  _getRgbaString(r, g, b, a) {
    r = Math.round(r * 100);
    g = Math.round(g * 100);
    b = Math.round(b * 100);

    return `rgba(${ r }%,${ g }%,${ b }%,${ a })`
  }
};

export default RivalColor;