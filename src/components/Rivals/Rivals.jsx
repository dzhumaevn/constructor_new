import RivalContainer from "./Rival/RivalContainer";
import React from "react";
import RivalSeveralMathes from "./RivalSeveralMatches/RivalSeveralMathes";
import RivalEURO2020 from "./RivalEURO2020/RivalEURO2020";
import CustomImageContainer from "../CustomImage/CustomImageContainer";

const Rivals = (props) => {
  const isOneMatch = props.isOneMatch;
  const rivals = props.rivals;
  const tournament = props.tournament;
  let content;

  if ( tournament.toLowerCase() === 'чемпионат европы по футболу' && isOneMatch) {

    content = (
      <>
        <CustomImageContainer imageUrl={ props.rivalsBg.bgImage.url }
                              width={ props.rivalsBg.bgImage.width }
                              height={ props.rivalsBg.bgImage.height }
                              x={ props.rivalsBg.bgImage.x }
                              y={ props.rivalsBg.bgImage.y }
        />
        <RivalEURO2020 rivalParams={ rivals[0] } />
        <RivalEURO2020 rivalParams={ rivals[1] } />
      </>
    );
  } else if ( isOneMatch ) {
    content = (
      <>
        <RivalContainer rivalParams={ rivals[0] } />
        <RivalContainer rivalParams={ rivals[1] } />
      </>
    );
  } else {
    content = (
      <RivalSeveralMathes rivalsBg={ props.rivalsBg } matches={ rivals } />
    );
  }

  return (
    content
  );
};

export default Rivals;