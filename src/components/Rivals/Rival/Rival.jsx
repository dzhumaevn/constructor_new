import React from "react";
import RivalName from "./RivalName/RivalName";
import RivalLogo from "./RivalLogo/RivalLogo";
import RivalBg from "./RivalBg/RivalBg";

const Rival = ({ rivalParams, isOneMatch }) => {
  const { bgRect, logo, name } = rivalParams;

  return (
    <>
      <RivalBg isOneMatch={ true } { ...bgRect } />
      <RivalLogo { ...logo } />
      <RivalName { ...name } />
    </>
  );
};

export default Rival;