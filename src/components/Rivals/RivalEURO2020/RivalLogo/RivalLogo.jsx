import CustomImageContainer from "../../../CustomImage/CustomImageContainer";
import React from "react";

const Rivalprops = props => {

  return (
    <CustomImageContainer imageUrl={ props.url }
                          width={ props.width }
                          height={ props.height }
                          x={ props.x }
                          y={ props.y }
    />
  );
};

export default Rivalprops;