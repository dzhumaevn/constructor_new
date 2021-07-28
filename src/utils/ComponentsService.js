// import componentsResponseMock from '../componentsResponse.json';
import store from "../redux/store";
import {
  addComponentsActionCreator, addComponentsLoadingPromiseActionCreator,
  setComponentsLoadingStatusActionCreator
} from "../redux/reducers/componentsReducer/componentsActionCreator";

export default class ComponentsService {
  static data = {
    cachedComponents: null,
    loading: false,
    loadingPromise: null,
    headersProps: {
      headers: {
        'X-FIGMA-TOKEN': '181987-7f531538-aa5d-42bb-b44d-613d227e0822',
      },
    },
    leaguesIds: {
      'futbol': {
        rpl: '1475%3A1570',
        primera: '1471%3A1414',
        apl: '1471%3A2472',
        seriaA: '1471%3A2805',
        bundesLiga: '1471%3A3540',
        liga1: '3014%3A390',
        portugueseSuperliga: '1471%3A3700',
        other: '1475%3A3168',
        flags: '3195%3A3947',
        nba: '3509%3A0',
      },
      'xokkej': { flags: '3195%3A3947', },
      'basketbol': { flags: '3195%3A3947', },
      'ufc': { flags: '3195%3A3947', },
      'boks': { flags: '3195%3A3947', },
    }
  };

  static async getComponents(kindOfSport) {
    if ( store.getState().components.components ) {
      return store.getState().components.components;
    } else if ( store.getState().components.loading ) {
      await store.getState().components.loadingPromise;
      return store.getState().components.components;
    }

    let
      resolver,
      components,
      mappedComponents;

    store.dispatch(setComponentsLoadingStatusActionCreator(true));
    store.dispatch(addComponentsLoadingPromiseActionCreator(new Promise(resolve => resolver = resolve)));

    components = await ComponentsService.requestComponents('futbol');
    mappedComponents = ComponentsService.mapComponents(components);

    store.dispatch(addComponentsActionCreator(mappedComponents));

    resolver();
    store.dispatch(setComponentsLoadingStatusActionCreator(false));

    return mappedComponents;
  };

  static async requestComponents(kindOfSport) {
    // return componentsResponseMock.components;

    const componentsUrl = ComponentsService.getComponentsUrl(kindOfSport),
          res           = await fetch(componentsUrl, ComponentsService.data.headersProps),
          figmaDocument = await res.json();

    return figmaDocument.components;
  }

  static getComponentsUrl(kindOfSport) {
    const headUrl      = 'https://api.figma.com/v1/files/ZHZl2ws4PRdZex0PMcun5I?ids=',
          leaguesIds   = Object.values(ComponentsService.data.leaguesIds[kindOfSport]).join(','),
          queryOptions = '&type=components&depth=1';

    return headUrl + leaguesIds + queryOptions;
  }

  static mapComponents(components) {
    const newComponents  = {},
          componentsKeys = Object.keys(components),
          rivals         = Object.values(components).map(item => item.name);
    componentsKeys.forEach((key, index) => newComponents[rivals[index]] = key);

    return newComponents;
  }
};