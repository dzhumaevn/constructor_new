import lc_square from "../assets/images/uefa_lc_square.jpeg";
import le_square from "../assets/images/uefa_le_square.jpeg";
import liga_conf_square from "../assets/images/liga_conf_square.jpg";
import lc from "../assets/images/uefa_lc.jpeg";
import le from "../assets/images/uefa_le.jpeg";
import liga_conf from "../assets/images/liga_conf.jpeg";
import seria_a from "../assets/images/seria_a.svg";
import ls from "../assets/images/logo_liga_stavok.svg";
import lsRect from "../assets/images/logo_liga_stavok2.svg";
import footballSportEquipment from "../assets/images/sports_equipment/football.svg";
import hockeySportEquipment from "../assets/images/sports_equipment/hockey_puck.svg";
import basketbolSportEquipment from "../assets/images/sports_equipment/basketball.svg";
import volejbolSportEquipment from "../assets/images/sports_equipment/volejbol.png";
import boksSportEquipment from "../assets/images/sports_equipment/boxgloves.svg";
import ufcSportEquipment from '../assets/images/ufc.png';
import logoRpl from '../assets/images/logo_rpl.svg';

const STORIES_MAIN_WIDTH = 1125;
const STORIES_MAIN_HEIGHT = 2436;

const MARKETINGTV_MAIN_WIDTH = 1920;
const MARKETINGTV_MAIN_HEIGHT = 1080;

const MOB_PUSH_MAIN_WIDTH = 1024;
const MOB_PUSH_MAIN_HEIGHT = 512;

const WEB_PUSH_MAIN_WIDTH = 1360;
const WEB_PUSH_MAIN_HEIGHT = 680;

const data = {
  stories: {
    mainParams: { width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#006237", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      futbol: { fill: "#006237", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      volejbol: { fill: "#138ece", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
      boks: { fill: "#006237", width: STORIES_MAIN_WIDTH, height: STORIES_MAIN_HEIGHT, },
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
            bgImage: { url: ls, width: 1125, height: 1100, x: 0, y: 0 },
            rect: { fill: '#2C2C2C', opacity: 1, width: 1062, height: 160, x: 31 },
            dash: { fill: '#FFFFFF', opacity: 1, width: 48, height: 10, x: 536 }
          },
          'liga-chempionov': {
            bgImage: { url: lc_square, width: 1125, height: 1110, x: 0, y: 0, },
            rect: { fill: '#020B42', opacity: 0.85, width: 1062, height: 160, x: 31 },
            dash: { fill: '#55FFF2', opacity: 0.85, width: 48, height: 10, x: 536 }
          },
          'liga-evropy': {
            bgImage: { url: le_square, width: 1125, height: 1100, x: 0, y: 0 },
            rect: { fill: '#2C2C2C', opacity: 1, width: 1062, height: 160, x: 31 },
            dash: { fill: '#F29B00', opacity: 1, width: 48, height: 10, x: 536 }
          },
          'seriya-a': {
            bgImage: { url: seria_a, width: 1125, height: 1100, x: 0, y: 0 },
            rect: { fill: '#0E3C9A', opacity: 0.8, width: 1062, height: 160, x: 31 },
            dash: { fill: '#FFFFFF', opacity: 0.8, width: 48, height: 10, x: 536 }
          },
          'liga-konferencij': {
            bgImage: { url: liga_conf_square, width: 1125, height: 1100, x: 0, y: 0 },
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
      volejbol: { url: volejbolSportEquipment, width: 320, height: 320, y: 1020, x: 670 },
      boks: { url: boksSportEquipment, width: 360, height: 320, y: 1020, x: 670 },
      ufc: { url: ufcSportEquipment, width: 400, height: 320, y: 1020, x: 670 },
    },
    startDate: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1380, x: 85, width: 750, textAlign: 'left',
    },
    startTime: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1520, x: 85, width: 750, textAlign: 'left',
    },
    tournament: {
      default: {
        fontSize: 90, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 1690, x: 85, width: 900, textAlign: 'left',
      },
      rpl: {
        fontSize: 90,
        fontFamily: 'FirsNeueRegular',
        fill: '#ffffff',
        y: 1740,
        x: 385,
        width: 750,
        textAlign: 'left',
        logoRpl: { url: logoRpl, y: 1690, x: 85, width: 250, height: 250 }
      },
    }
  },
  marketingtv: {
    mainParams: { width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#006237", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      futbol: { fill: "#006237", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
      boks: { fill: "#006237", width: MARKETINGTV_MAIN_WIDTH, height: MARKETINGTV_MAIN_HEIGHT, },
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
            bgImage: { url: lsRect, width: 1920, height: 690, x: 0, y: 0, },
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
          'liga-konferencij': {
            bgImage: { url: liga_conf, width: 1920, height: 690, x: 0, y: 0, },
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
    },
    lineOnCenter: {
      default: { fill: '#ffffff', width: MARKETINGTV_MAIN_WIDTH, height: 90, y: 690, x: 0 },
      futbol: { fill: "#ffffff", width: MARKETINGTV_MAIN_WIDTH, height: 90, y: 690, x: 0 },
      xokkej: { fill: '#FF343A', width: MARKETINGTV_MAIN_WIDTH, height: 90, y: 690, x: 0 },
      basketbol: { fill: '#ffffff', width: MARKETINGTV_MAIN_WIDTH, height: 90, y: 690, x: 0 },
      ufc: { fill: '#ffffff', width: MARKETINGTV_MAIN_WIDTH, height: 90, y: 690, x: 0 },
    },
    sportEquipment: {
      default: { url: ls, width: 270, height: 280, y: 630, x: 1500 },
      futbol: { url: footballSportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      xokkej: { url: hockeySportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      basketbol: { url: basketbolSportEquipment, width: 290, height: 280, y: 630, x: 1500 },
      volejbol: { url: volejbolSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      boks: { url: boksSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      ufc: { url: ufcSportEquipment, width: 350, height: 280, y: 630, x: 1500 },
    },
    startDate: {
      fontSize: 100, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 810, x: 85, width: 1400, textAlign: 'left',
    },
    startTime: {
      fontSize: 120, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 1420, x: 85, width: 800, textAlign: 'left',
    },
    tournament: {
      default: {
        fontSize: 90, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 950, x: 85, width: 1800, textAlign: 'left',
      },
      rpl: {
        fontSize: 90,
        fontFamily: 'FirsNeueRegular',
        fill: '#ffffff',
        y: 950,
        x: 255,
        width: 1800,
        textAlign: 'left',
        logoRpl: { url: logoRpl, y: 920, x: 85, width: 130, height: 130 }
      },
    }
  },
  push: {
    mainParams: { width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#006237", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
      futbol: { fill: "#006237", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
      boks: { fill: "#006237", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
      ufc: { fill: "#000000", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
      xokkej: { fill: "#00A6E0", width: MOB_PUSH_MAIN_WIDTH, height: MOB_PUSH_MAIN_HEIGHT, },
    },
    rivals: {
      oneMatch: [
        {
          bgRect: { width: 340, height: 512, y: 0, x: 350, },
          logo: { width: 150, height: 150, y: 42, x: 445, },
          name: {
            fontSize: 34, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 300, y: 214, x: 370, textAlign: "center", wrap: "word",
          }
        },
        {
          bgRect: { width: 340, height: 512, y: 0, x: 690, },
          logo: { width: 150, height: 150, y: 42, x: 785, },
          name: {
            fontSize: 34, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 300, y: 214, x: 710, textAlign: "center", wrap: "word",
          }
        }
      ],
      severalMatches: {
        commonDecor: {
          'default': {
            bgImage: { url: lsRect, width: 680, height: 512, x: 350, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 600, height: 70, x: 390 },
            dash: { fill: '#FFFFFF', opacity: 1, width: 40, height: 8, x: 670 }
          },
          'liga-chempionov': {
            bgImage: { url: lc_square, width: 680, height: 512, x: 350, y: 0, },
            rect: { fill: '#020B42', opacity: 0.85, width: 600, height: 70, x: 390 },
            dash: { fill: '#55FFF2', opacity: 0.85, width: 40, height: 8, x: 670 }
          },
          'liga-evropy': {
            bgImage: { url: le_square, width: 680, height: 512, x: 350, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 600, height: 70, x: 390 },
            dash: { fill: '#F29B00', opacity: 1, width: 40, height: 8, x: 670 }
          },
          'seriya-a': {
            bgImage: { url: seria_a, width: 680, height: 512, x: 350, y: 0, },
            rect: { fill: '#0E3C9A', opacity: 0.8, width: 600, height: 70, x: 390 },
            dash: { fill: '#FFFFFF', opacity: 0.8, width: 40, height: 8, x: 670 }
          },
          'liga-konferencij': {
            bgImage: { url: liga_conf_square, width: 680, height: 512, x: 350, y: 0, },
            rect: { fill: '#066d4b', opacity: 0.8, width: 600, height: 70, x: 390 },
            dash: { fill: '#0ca995', opacity: 0.8, width: 40, height: 8, x: 670 }
          },
        },
        rivalsNames: [
          [
            {
              y: 25, x: 390, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 25, x: 701, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 124, x: 390, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 124, x: 710, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 214, x: 390, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 214, x: 710, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
        ],
        decor: [
          { rect: { y: 25, }, dash: { y: 54, } },
          { rect: { y: 120, }, dash: { y: 152, } },
          { rect: { y: 210, }, dash: { y: 243, } },
        ]
      }
    },
    lineOnCenter: {
      default: { fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      futbol: { fill: "#ffffff", width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      xokkej: { fill: '#FF343A', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      basketbol: { fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      ufc: { fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
    },
    sportEquipment: {
      default: { url: ls, width: 270, height: 280, y: 630, x: 1500 },
      futbol: { url: footballSportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      xokkej: { url: hockeySportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      basketbol: { url: basketbolSportEquipment, width: 290, height: 280, y: 630, x: 1500 },
      volejbol: { url: volejbolSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      boks: { url: boksSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      ufc: { url: ufcSportEquipment, width: 350, height: 280, y: 630, x: 1500 },
    },
    startDate: {
      fontSize: 42, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 205, x: 34, width: 280, textAlign: 'left',
    },
    startTime: {
      fontSize: 42, fontFamily: 'FirsNeueBold', fontWeight: 700, fill: '#ffffff',
      y: 205, x: 34, width: 280, textAlign: 'left',
    },
    tournament: {
      default: {
        fontSize: 30, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 340, x: 34, width: 260, textAlign: 'left',
      },
      rpl: {
        fontSize: 28, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 340, x: 100, width: 200, textAlign: 'left',
        logoRpl: { url: logoRpl, y: 340, x: 34, width: 50, height: 50 }
      },
    },
    lsLogo: { url: lsRect, width: 250, height: 80, y: 62, x: 34 },
    coefficients: [
      {
        name: {
          text: 'П1', fontSize: 28, fontFamily: "FirsNeueRegular",
          fontWeight: 700, fill: '#ffffff', y: 295, x: 500,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 345, x: 449, width: 140, textAlign: 'center'
        },
        bg: { fill: '#ffffff', y: 335, x: 449, width: 140, height: 60 },
      },
      {
        name: {
          text: 'X', fontSize: 28, fontFamily: "FirsNeueRegular",
          fontWeight: 700, fill: '#ffffff', y: 295, x: 681.2,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 345, x: 624, width: 140, textAlign: 'center'
        },
        bg: { fill: '#ffffff', y: 335, x: 624, width: 140, height: 60 },
      },
      {
        name: {
          text: 'П2', fontSize: 28, fontFamily: "FirsNeueRegular",
          fontWeight: 700, fill: '#ffffff', y: 295, x: 845,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 345, x: 794, width: 140, textAlign: 'center'
        },
        bg: { fill: '#ffffff', y: 335, x: 794, width: 140, height: 60 },
      },
    ],
    ctaButton: {
      text: {
        text: 'Заключить пари!', fill: '#004B13', fontFamily: "FirsNeueBold", verticalAlign: 'middle',
        fontSize: 44, y: 410, x: 505, height: 70
      },
      bg: { fill: '#F8E700', y: 410, x: 449, width: 485, height: 70 },
    }
  },
  webPush: {
    mainParams: { width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT },
    mainBackground: {
      default: { fill: "#006237", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      futbol: { fill: "#006237", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      basketbol: { fill: "#93621d", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      volejbol: { fill: "#138ece", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      boks: { fill: "#006237", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      ufc: { fill: "#000000", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
      xokkej: { fill: "#00A6E0", width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, },
    },
    rivals: {
      oneMatch: [
        {
          bgRect: { width: 542, height: 680, y: 0, x: 0, },
          logo: { width: 200, height: 200, y: 102, x: 274, },
          name: {
            fontSize: 35, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 320, y: 324, x: 210, textAlign: "center", wrap: "word",
          }
        },
        {
          bgRect: { width: 542, height: 680, y: 0, x: 818, },
          logo: { width: 200, height: 200, y: 102, x: 880, },
          name: {
            fontSize: 35, fontFamily: "FirsNeueBold", fontWeight: 700, fill: "#ffffff",
            width: 320, y: 324, x: 820, textAlign: "center", wrap: "word",
          }
        }
      ],
      severalMatches: {
        commonDecor: {
          'default': {
            bgImage: { url: lsRect, width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, x: 0, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 600, height: 70, x: 235 },
            dash: { fill: '#FFFFFF', opacity: 1, width: 40, height: 8, x: 515 }
          },
          'liga-chempionov': {
            bgImage: { url: lc, width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, x: 0, y: 0, },
            rect: { fill: '#020B42', opacity: 0.85, width: 600, height: 70, x: 235 },
            dash: { fill: '#55FFF2', opacity: 0.85, width: 40, height: 8, x: 515 }
          },
          'liga-evropy': {
            bgImage: { url: le, width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, x: 0, y: 0, },
            rect: { fill: '#2C2C2C', opacity: 1, width: 600, height: 70, x: 235 },
            dash: { fill: '#F29B00', opacity: 1, width: 40, height: 8, x: 515 }
          },
          'seriya-a': {
            bgImage: { url: seria_a, width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, x: 0, y: 0, },
            rect: { fill: '#0E3C9A', opacity: 0.8, width: 600, height: 70, x: 235 },
            dash: { fill: '#FFFFFF', opacity: 0.8, width: 40, height: 8, x: 515 }
          },
          'liga-konferencij': {
            bgImage: { url: liga_conf, width: WEB_PUSH_MAIN_WIDTH, height: WEB_PUSH_MAIN_HEIGHT, x: 0, y: 0, },
            rect: { fill: '#066d4b', opacity: 0.8, width: 600, height: 70, x: 235 },
            dash: { fill: '#0ca995', opacity: 0.8, width: 40, height: 8, x: 515 }
          },
        },
        rivalsNames: [
          [
            {
              y: 105, x: 235, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 105, x: 546, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 204, x: 235, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 204, x: 546, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
          [
            {
              y: 294, x: 235, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            },
            {
              y: 294, x: 546, fontSize: 28, fontFamily: "FirsNeueBold", fontWeight: 700,
              fill: "#ffffff", width: 280, height: 70, align: "center", verticalAlign: 'middle',
              wrap: 'word',
            }
          ],
        ],
        decor: [
          { rect: { y: 105, }, dash: { y: 134, } },
          { rect: { y: 200, }, dash: { y: 232, } },
          { rect: { y: 290, }, dash: { y: 323, } },
        ]
      }
    },
    lineOnCenter: {
      default: { visible: false, fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      futbol: { visible: false, fill: "#ffffff", width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      xokkej: { visible: false, fill: '#FF343A', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      basketbol: { visible: false, fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      volejbol: { visible: false, fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
      ufc: { visible: false, fill: '#ffffff', width: 30, height: MARKETINGTV_MAIN_HEIGHT, y: 0, x: 320 },
    },
    sportEquipment: {
      default: { url: ls, width: 270, height: 280, y: 630, x: 1500 },
      futbol: { url: footballSportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      xokkej: { url: hockeySportEquipment, width: 270, height: 280, y: 630, x: 1500 },
      basketbol: { url: basketbolSportEquipment, width: 290, height: 280, y: 630, x: 1500 },
      volejbol: { url: volejbolSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      boks: { url: boksSportEquipment, width: 280, height: 280, y: 630, x: 1500 },
      ufc: { url: ufcSportEquipment, width: 350, height: 280, y: 630, x: 1500 },
    },
    startDate: {
      fontSize: 34, fontFamily: 'FirsNeueBold', fontWeight: 700,
      shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
      fill: '#ffffff', y: 100, x: 562, width: 230, textAlign: 'center',
    },
    startTime: {
      fontSize: 34, fontFamily: 'FirsNeueBold', fontWeight: 700,
      shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
      fill: '#ffffff', y: 100, x: 562, width: 230, textAlign: 'center',
    },
    tournament: {
      default: {
        fontSize: 30, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 204, x: 572, width: 210, textAlign: 'center',
        shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
      },
      rpl: {
        fontSize: 28, fontFamily: 'FirsNeueRegular', fill: '#ffffff',
        y: 310, x: 575, width: 210, textAlign: 'center',
        shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        logoRpl: { url: logoRpl, y: 215, x: 640, width: 80, height: 80 }
      },
    },
    coefficients: [
      {
        name: {
          text: 'П1', fontSize: 28, fontFamily: "FirsNeueBold", fill: '#ffffff', y: 428, x: 366,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 466, x: 235, width: 307, height: 60, textAlign: 'center', verticalAlign: 'middle'
        },
        bg: { fill: '#ffffff', y: 464, x: 235, width: 307, height: 60 },
      },
      {
        name: {
          text: 'Х', fontSize: 28, fontFamily: "FirsNeueBold", fill: '#ffffff', y: 428, x: WEB_PUSH_MAIN_WIDTH / 2 - 8,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 466, x: 548, width: 264, height: 60, textAlign: 'center', verticalAlign: 'middle'
        },
        bg: { fill: '#ffffff', y: 464, x: 548, width: 264, height: 60 },
      },
      {
        name: {
          text: 'П2', fontSize: 28, fontFamily: "FirsNeueBold", fill: '#ffffff', y: 428, x: 962,
          shadowColor: 'black', shadowBlur: 4, shadowOffsetX: -2, shadowOffsetY: 2,
        },
        value: {
          text: '0.00', fill: '#004B13', fontFamily: "FirsNeueRegular",
          fontSize: 40, y: 466, x: 818, width: 307, height: 60, textAlign: 'center', verticalAlign: 'middle'
        },
        bg: { fill: '#ffffff', y: 464, x: 818, width: 307, height: 60 },
      },
    ],
    ctaButton: {
      text: {
        text: 'Заключить пари!', fill: '#004B13', fontFamily: "FirsNeueBold",
        fontSize: 44, y: 544, x: 480, height: 70
      },
      bg: { fill: '#F8E700', y: 540, x: 235, width: 890, height: 60 },
    }
  },
};

export default data;