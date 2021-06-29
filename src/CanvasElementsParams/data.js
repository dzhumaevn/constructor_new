import lc from "../images/uefa_lc.jpeg";
import le from "../images/uefa_le.jpeg";
import seria_a from "../images/seria_a.svg";
import ls from "../images/logo_liga_stavok.svg";
import footballSportEquipment from "../images/sports_equipment/football.svg";
import hockeySportEquipment from "../images/sports_equipment/hockey_puck.svg";
import basketbolSportEquipment from "../images/sports_equipment/basketball.svg";
import boksSportEquipment from "../images/sports_equipment/boxgloves.svg";
import che from '../images/euro_bg.jpg';

const STORIES_MAIN_WIDTH = 1125;
const STORIES_MAIN_HEIGHT = 2436;

const MARKETINGTV_MAIN_WIDTH = 1920;
const MARKETINGTV_MAIN_HEIGHT = 1080;

const data = {
  stories: {
    mainParams: { width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#014b14", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      futbol: { fill: "#014b14", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      boks: { fill: "#014b14", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      ufc: { fill: "#000000", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      xokkej: { fill: "#00A6E0", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
    },
    rivals: {
      oneMatch: [
        {
          bgRect: { width: 563, height: 1100, y: 0, x: 0 },
          logo: { width: 320, height: 320, y: 450, x: ((STORIES_MAIN_WIDTH / 2) / 2) - 160 },
          name: {
            fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
            fill: "#ffffff", width: 500, y: 820, x: ((STORIES_MAIN_WIDTH / 2) / 2) - 250, textAlign: "center",
            wrap: 'word',
          }
        },
        {
          bgRect: { width: 563, height: 1100, y: 0, x: STORIES_MAIN_WIDTH / 2 },
          logo: { width: 320, height: 320, y: 450, x: (STORIES_MAIN_WIDTH / 2) + ((STORIES_MAIN_WIDTH / 2) / 2) - 160 },
          name: {
            fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
            fill: "#ffffff", width: 500, y: 820, x: (STORIES_MAIN_WIDTH / 2) + ((STORIES_MAIN_WIDTH / 2) / 2) - 250,
            textAlign: "center", wrap: 'word',
          }
        }
      ],
      severalMatches: {
        commonDecor: {
          'default': {
            bgImage: {url: ls, width: 1125, height: 1100, x: 0, y: 0},
            rect: { fill: '#2C2C2C', opacity: 1, width: 1062, height: 160, x: 31 },
            dash: { fill: '#FFFFFF', opacity: 1, width: 48, height: 10, x: 536 }
          },
          'liga-chempionov': {
            bgImage: { url: lc, width: 1125, height: 1110, x: 0, y: 0, },
            rect: { fill: '#020B42', opacity: 0.85, width: 1062, height: 160, x: 31 },
            dash: { fill: '#55FFF2', opacity: 0.85, width: 48, height: 10, x: 536 }
          },
          'liga-evropy': {
            bgImage: {url: le, width: 1125, height: 1100, x: 0, y: 0},
            rect: { fill: '#2C2C2C', opacity: 1, width: 1062, height: 160, x: 31 },
            dash: { fill: '#F29B00', opacity: 1, width: 48, height: 10, x: 536 }
          },
          'seriya-a': {
            bgImage: {url: seria_a, width: 1125, height: 1100, x: 0, y: 0},
            rect: { fill: '#0E3C9A', opacity: 0.8, width: 1062, height: 160, x: 31 },
            dash: { fill: '#FFFFFF', opacity: 0.8, width: 48, height: 10, x: 536 }
          },
          'chempionat-evropy-po-futbolu': {
            bgImage: {url: che, width: 1125, height: 1100, x: 0, y: 0},
            rect: { fill: '#066d4b', opacity: 0.8, width: 1062, height: 160, x: 31 },
            dash: { fill: '#0ca995', opacity: 0.8, width: 48, height: 10, x: 536 }
          },
        },
        rivalsNames: [
          [
            {
              y: 570, x: 40, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 570, x: 600, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 770, x: 40, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 770, x: 600, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 370, x: 40, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 370, x: 600, fontSize: 50, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 480, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
        ],
        decor: [
          { rect: { y: 560, }, dash: { y: 635, } },
          { rect: { y: 760, }, dash: { y: 835, } },
          { rect: { y: 360, }, dash: { y: 435, } },
        ]
      }
      ,
    },
    lineOnCenter: {
      default: { fill: '#ffffff', width: STORIES_MAIN_WIDTH, height: 90, y: 1100, x: 0 },
      futbol: { fill: "#ffffff", width: STORIES_MAIN_WIDTH, height: 90, y: 1100, x: 0 },
      xokkej: { fill: '#FF343A', width: STORIES_MAIN_WIDTH, height: 90, y: 1100, x: 0 },
      basketbol: { fill: '#ffffff', width: STORIES_MAIN_WIDTH, height: 90, y: 1100, x: 0 },
      ufc: { fill: '#ffffff', width: STORIES_MAIN_WIDTH, height: 90, y: 1100, x: 0 },
    },
    sportEquipment: {
      default: { url: ls, width: 350, height: 350, y: 1020, x: 670 },
      futbol: { url: footballSportEquipment, width: 330, height: 350, y: 1020, x: 700 },
      xokkej: { url: hockeySportEquipment, width: 230, height: 230, y: 1040, x: 750 },
      basketbol: { url: basketbolSportEquipment, width: 360, height: 320, y: 1020, x: 670 },
      boks: { url: boksSportEquipment, width: 360, height: 320, y: 1020, x: 670 },
    },
    startDate: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1380, x: 85, width: 800, textAlign: 'left',
    },
    startTime: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1520, x: 85, width: 800, textAlign: 'left',
    },
    tournament: {
      default: {
        fontSize: 90, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 1690, x: 85, width: 900, textAlign: 'left',
      },
      rpl: {},
    }
  },
  marketingtv: {
    mainParams: { width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#014b14", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      futbol: { fill: "#014b14", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      boks: { fill: "#014b14", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      ufc: { fill: "#000000", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      xokkej: { fill: "#00A6E0", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
    },
    rivals: {
      oneMatch: [
        {
          bgRect: { width: 960, height: 700, y: 0, x: 0, },
          logo: { width: 300, height: 300, y: 150, x: 320, },
          name: {
            fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 800, y: 540, x: 55, textAlign: "center", wrap: "word",
          }
        },
        {
          bgRect: { width: 960, height: 700, y: 0, x: 960, },
          logo: { width: 300, height: 300, y: 150, x: 1280, },
          name: {
            fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 800, y: 540, x: 1020, textAlign: "center", wrap: "word",
          }
        }
      ],
      severalMatches: {
        commonDecor: {
          'default': {
            bgImage: { url: ls, width: 1920, height: 690, x: 0, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 1750, height: 150, x: 90 },
            dash: { fill: '#FFFFFF', opacity: 1, width: 70, height: 15, x: 930 }
          },
          'liga-chempionov': {
            bgImage: { url: lc, width: 1920, height: 690, x: 0, y: 0, },
            rect: { fill: '#020B42', opacity: 0.85, width: 1750, height: 150, x: 90 },
            dash: { fill: '#55FFF2', opacity: 0.85, width: 70, height: 15, x: 930 }
          },
          'liga-evropy': {
            bgImage: { url: le, width: 1920, height: 690, x: 0, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 1750, height: 150, x: 90 },
            dash: { fill: '#F29B00', opacity: 1, width: 70, height: 15, x: 930 }
          },
          'seriya-a': {
            bgImage: { url: seria_a, width: 1920, height: 690, x: 0, y: 0, },
            rect: { fill: '#0E3C9A', opacity: 0.8, width: 1750, height: 150, x: 90 },
            dash: { fill: '#FFFFFF', opacity: 0.8, width: 70, height: 15, x: 930 }
          },
          'chempionat-evropy-po-futbolu': {
            bgImage: { url: che, width: 1920, height: 690, x: 0, y: 0, },
            rect: { fill: '#066d4b', opacity: 0.8, width: 1750, height: 150, x: 90 },
            dash: { fill: '#0ca995', opacity: 0.8, width: 70, height: 15, x: 930 }
          },
        },
        rivalsNames: [
          [
            {
              y: 275, x: 100, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 780, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 275, x: 1070, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 720, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 455, x: 100, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 780, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 455, x: 1070, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 720, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 105, x: 100, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 780, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 105, x: 1070, fontSize: 60, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 720, height: 150, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
        ],
        decor: [
          { rect: { y: 275, }, dash: { y: 345, } },
          { rect: { y: 450, }, dash: { y: 520, } },
          { rect: { y: 100, }, dash: { y: 170, } },
        ]
      }
      ,
    },
    lineOnCenter: {
      default: { fill: '#ffffff', width: 1920, height: 90, y: 690, x: 0 },
      futbol: { fill: "#ffffff", width: 1920, height: 90, y: 690, x: 0 },
      xokkej: { fill: '#FF343A', width: 1920, height: 90, y: 690, x: 0 },
      basketbol: { fill: '#ffffff', width: 1920, height: 90, y: 690, x: 0 },
      ufc: { fill: '#ffffff', width: 1920, height: 90, y: 690, x: 0 },
    },
    sportEquipment: {
      default: { url: ls, width: 270, height: 280, y: 630, x: 1500 },
      futbol: { url: footballSportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      xokkej: { url: hockeySportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      basketbol: { url: basketbolSportEquipment, width: 290, height: 280, y: 630, x: 1500 },
      boks: { url: boksSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
    },
    startDate: {
      fontSize: 100, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 840, x: 85, width: 1400, textAlign: 'left',
    },
    startTime: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1520, x: 85, width: 800, textAlign: 'left',
    },
    tournament: {
      default: {
        fontSize: 90, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 950, x: 85, width: 1800, textAlign: 'left',
      },
      rpl: {},
    }
  },
};

export default data;