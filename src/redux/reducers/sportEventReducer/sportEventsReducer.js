// import barselona from '../../../images/barselona.svg';
// import real_madrid from '../../../images/real-madrid.svg';
// import footballSportEquipment from "../../../images/sports_equipment/football.svg";
import lc from '../../../images/uefa_lc.jpeg';

export const ADD_NEW_SPORT_EVENTS = 'ADD_NEW_SPORT_EVENTS';

const initialState = [
  {
    "info": {
      "inputStringData": "Футбол; Лига Чемпионов; Челси - Атлетико; 29 мая 22:00",
      "kindOfSport": "Футбол",
      "tournament": "Лига Чемпионов",
      "rivalsNames": [
        "Барселона",
        "Реал Мадрид"
      ],
      "startDate": "29 мая",
      "startTime": "22:00"
    },
    "params": {
      "mainParams": {
        "x": 0,
        "y": 0,
        "width": 1920,
        "height": 1080
      },
      "rivals": [
        // верхний
        {
          "decor": {
            "rect": {
              "fill": "#020B42",
              "opacity": 0.85,
              "width": 1750,
              "height": 150,
              "x": 90,
              "y": 100
            },
            "dash": {
              "fill": "#55FFF2",
              "opacity": 0.85,
              "width": 70,
              "height": 15,
              "x": 930,
              "y": 170
            }
          },
          "rivals": [
            {
              "y": 100,
              "x": 100,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 780,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "БАРСЕЛОНА",
              "key": "Барселона_9162"
            },
            {
              "y": 100,
              "x": 1070,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 720,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "РЕАЛ МАДРИД",
              "key": "Реал Мадрид_7851"
            }
          ]
        },
        // средний
        {
          "decor": {
            "rect": {
              "fill": "#020B42",
              "opacity": 0.85,
              "width": 1750,
              "height": 150,
              "x": 90,
              "y": 275
            },
            "dash": {
              "fill": "#55FFF2",
              "opacity": 0.85,
              "width": 70,
              "height": 15,
              "x": 930,
              "y": 345
            }
          },
          "rivals": [
            {
              "y": 275,
              "x": 100,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 780,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "БАРСЕЛОНА",
              "key": "Барселона_9126"
            },
            {
              "y": 275,
              "x": 1070,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 720,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "РЕАЛ МАДРИД",
              "key": "Реал Мадрид_7585"
            }
          ]
        },
        // нижний
        {
          "decor": {
            "rect": {
              "fill": "#020B42",
              "opacity": 0.85,
              "width": 1750,
              "height": 150,
              "x": 90,
              "y": 450
            },
            "dash": {
              "fill": "#55FFF2",
              "opacity": 0.85,
              "width": 70,
              "height": 15,
              "x": 930,
              "y": 520
            }
          },
          "rivals": [
            {
              "y": 450,
              "x": 100,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 780,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "БАРСЕЛОНА",
              "key": "Барселона_9016"
            },
            {
              "y": 450,
              "x": 1070,
              "fontSize": 60,
              "fontFamily": "FirsNeueBold",
              "fontWeight": 700,
              "fill": "#ffffff",
              "width": 720,
              "height": 150,
              "align": "center",
              "verticalAlign": "middle",
              "wrap": "word",
              "text": "РЕАЛ МАДРИД",
              "key": "Реал Мадрид_9785"
            }
          ]
        },
      ],
      "fileName": "liga_match_stories_1125_2436-futbol-liga-chempionov-chelsi---atletiko-29-maya-2200",
      "id": "ch_e_7812",
      "isOneMatch": false,
      "lineOnCenter": {
        "fill": "#ffffff",
        "width": 1920,
        "height": 90,
        "y": 690,
        "x": 0
      },
      "mainBackground": {
        "fill": "#014b14",
        "width": 1920,
        "height": 1080
      },
      "rivalsBg": {
        "name": {
          "fontSize": 50,
          "fontFamily": "FirsNeueBold",
          "fontWeight": 700,
          "fill": "#ffffff",
          "width": 480,
          "height": 150,
          "x": 40,
          "align": "center",
          "verticalAlign": "middle",
          "wrap": "word"
        },
        "bgImage": {
          "url": lc,
          "width": 1920,
          "height": 690,
          "x": 0,
          "y": 0
        },
        "rect": {
          "fill": "#020B42",
          "opacity": 0.85,
          "width": 1062,
          "height": 160,
          "x": 31
        },
        "dash": {
          "fill": "#55FFF2",
          "opacity": 0.85,
          "width": 48,
          "height": 10,
          "x": 536
        }
      },
      "sportEquipment": {
        "url": "/static/media/football.cf4fc7f5.svg",
        "width": 270,
        "height": 280,
        "y": 630,
        "x": 1500
      },
      "startDate": {
        "fontSize": 100,
        "fontFamily": "FirsNeueBold",
        "fontWeight": 700,
        "fill": "#ffffff",
        "y": 840,
        "x": 85,
        "width": 1400,
        "textAlign": "left"
      },
      "startTime": {
        "fontSize": 120,
        "fontFamily": "FirsNeueBold",
        "fontWeight": 700,
        "fill": "#ffffff",
        "y": 1520,
        "x": 85,
        "width": 800,
        "textAlign": "left"
      },
      "tournament": {
        "fontSize": 90,
        "fontFamily": "FirsNeueRegular",
        "fill": "#ffffff",
        "y": 950,
        "x": 85,
        "width": 1800,
        "textAlign": "left"
      }
    }
  }
];

const sportEventsReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case ADD_NEW_SPORT_EVENTS: {
      return action.sportEvents;
    }

    default:
      return state;
  }
};

export default sportEventsReducer;