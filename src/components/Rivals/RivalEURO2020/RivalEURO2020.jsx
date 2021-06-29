import React from "react";
import RivalName from "./RivalName/RivalName";
import RivalLogo from "./RivalLogo/RivalLogo";

const RivalEURO2020 = ({ rivalParams }) => {
  const { logo, name } = rivalParams;

  return (
    <>
      <RivalLogo { ...logo } />
      <RivalName { ...name } />
    </>
  );
};

export default RivalEURO2020;