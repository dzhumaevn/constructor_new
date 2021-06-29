import CustomTextContainer from "../CustomText/CustomTextContainer";

const Tournament = props => {
  const { width, x, y, fill, text, fontFamily, fontSize, fontWeight, textAlign } = props.params;

  return (
    <CustomTextContainer text={ text }
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

export default Tournament;