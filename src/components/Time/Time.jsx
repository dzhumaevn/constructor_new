import CustomTextContainer from "../CustomText/CustomTextContainer";

const Time = props => {
  const { width, x, y, fill, text, fontSize, fontFamily, fontWeight, textAlign } = props.params;

  if ( !text ) {
    return null;
  }

  return (
    <CustomTextContainer text={ text + ' МСК' }
                         fontSize={ fontSize }
                         fontStyle={ fontWeight }
                         fontFamily={ fontFamily }
                         fill={ fill }
                         x={ x }
                         y={ y }
                         width={ width }
                         wrap='word'
                         align={ textAlign }
    />
  );
};

export default Time;