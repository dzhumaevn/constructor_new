const charsMap = {
  "Ё": "YO",
  "Й": "J",
  "Ц": "С",
  "У": "U",
  "К": "K",
  "Е": "E",
  "Н": "N",
  "Г": "G",
  "Ш": "SH",
  "Щ": "SCH",
  "З": "Z",
  "Х": "X",
  "Ъ": "",
  "ё": "yo",
  "й": "j",
  "ц": "c",
  "у": "u",
  "к": "k",
  "е": "e",
  "н": "n",
  "г": "g",
  "ш": "sh",
  "щ": "sch",
  "з": "z",
  "х": "x",
  "ъ": "",
  "Ф": "F",
  "Ы": "Y",
  "В": "V",
  "А": "a",
  "П": "P",
  "Р": "R",
  "О": "O",
  "Л": "L",
  "Д": "D",
  "Ж": "ZH",
  "Э": "E",
  "ф": "f",
  "ы": "y",
  "в": "v",
  "а": "a",
  "п": "p",
  "р": "r",
  "о": "o",
  "л": "l",
  "д": "d",
  "ж": "zh",
  "э": "e",
  "Я": "Ya",
  "Ч": "CH",
  "С": "S",
  "М": "M",
  "И": "I",
  "Т": "T",
  "Ь": "",
  "Б": "B",
  "Ю": "YU",
  "я": "ya",
  "ч": "ch",
  "с": "s",
  "м": "m",
  "и": "i",
  "т": "t",
  "ь": "",
  "б": "b",
  "ю": "yu",
};

/**
 *
 * @param string
 * @returns {string} The transliterated from cyrillic to latin
 */

const transliterate = (string) => {
  const regExpForEngChar = new RegExp(/\w/);
  const regExpForDash = new RegExp(/[\s.\-–—]/);

  return string.split('').map(function (char) {

    if ( regExpForEngChar.test(char) ) {
      return char;
    } else if ( charsMap[char] ) {
      return charsMap[char];
    } else if ( regExpForDash.test(char) ) {
      return '-';
    } else {
      return '';
    }

  }).join("");
};

export default transliterate;