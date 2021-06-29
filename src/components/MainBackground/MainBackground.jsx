import React from "react";
import CustomRectContainer from "../CustomRect/CustomRectContainer";

const MainBackground = props => {
  return (
    <CustomRectContainer { ...props }
                         x={ props.x }
                         y={ props.y }
                         width={ props.width }
                         height={ props.height }
                         fill={ props.fill }
                         perfectDrawEnabled={ false }

                         applyCache
                         applyHitFromCache
    />
  );
};

export default MainBackground;