import CustomTextContainer from "../CustomText/CustomTextContainer";
import CustomImageContainer from "../CustomImage/CustomImageContainer";

const Tournament = props => {
  const { width, x, y, fill, text, fontFamily, fontSize, fontWeight, textAlign, logoRpl } = props.params;

  return (
    <>
      <CustomImageContainer x={ logoRpl.x }
                            y={ logoRpl.y }
                            width={ logoRpl.width}
                            height={ logoRpl.height }
                            imageUrl={ logoRpl.url }
      />
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
    </>
  );
};

export default Tournament;