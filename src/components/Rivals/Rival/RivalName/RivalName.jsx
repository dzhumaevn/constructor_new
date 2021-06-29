import CustomTextContainer from "../../../CustomText/CustomTextContainer";
import React from "react";

const RivalName = props => {
  return (
    <CustomTextContainer text={ props.text }
                         fontFamily={ props.fontFamily }
                         fontSize={ props.fontSize }
                         fontStyle={ props.fontWeight }
                         fill={ props.fill }
                         x={ props.x }
                         y={ props.y }
                         width={ props.width }
                         wrap={ props.wrap }
                         align={ props.textAlign }
    />
  );
};

export default RivalName;