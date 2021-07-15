import React from "react";
import CustomImageContainer from "../CustomImage/CustomImageContainer";

const LsLogo = ({ params }) => {
  return <CustomImageContainer imageUrl={ params.url }
                               x={ params.x }
                               y={ params.y }
                               width={ params.width }
                               height={ params.height } />
};

export default LsLogo;