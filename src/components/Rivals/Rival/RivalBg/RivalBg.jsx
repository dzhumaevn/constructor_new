import React from "react";
import CustomRectContainer from "../../../CustomRect/CustomRectContainer";

const RivalBg = props => {
  return (
    <CustomRectContainer x={ props.x }
          y={ props.y }
          width={ props.width }
          height={ props.height }
          fill={ props.fill }
    />
  );
};

export default RivalBg;