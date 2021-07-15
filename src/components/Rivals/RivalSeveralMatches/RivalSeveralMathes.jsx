import CustomTextContainer from "../../CustomText/CustomTextContainer";
import React from "react";
import CustomImageContainer from "../../CustomImage/CustomImageContainer";
import CustomRectContainer from "../../CustomRect/CustomRectContainer";

const RivalSeveralMatches = ({ matches, rivalsBg }) => {
  const matchesContent = matches.map(match => {
    const [ leftRival, rightRival ] = match.rivals;
    const { rect, dash } = match.decor;

    return (
      <React.Fragment key={ leftRival.key + '_' + rightRival.key }>
        <CustomRectContainer { ...rect } />
        <CustomRectContainer { ...dash } />
        <CustomTextContainer { ...leftRival } />
        <CustomTextContainer { ...rightRival } />
      </React.Fragment>
    )
  });

  return (
    <>
      <CustomImageContainer imageUrl={ rivalsBg.bgImage.url }
                            width={ rivalsBg.bgImage.width }
                            height={ rivalsBg.bgImage.height }
                            x={ rivalsBg.bgImage.x }
                            y={ rivalsBg.bgImage.y }
      />
      { matchesContent }
    </>
  );
};

export default RivalSeveralMatches;