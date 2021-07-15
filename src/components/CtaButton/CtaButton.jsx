import React from "react";
import CustomRectContainer from "../CustomRect/CustomRectContainer";
import CustomTextContainer from "../CustomText/CustomTextContainer";

const CtaButton = props => {
  return (
    <>
      <CustomRectContainer { ...props.params.bg }  />
      <CustomTextContainer { ...props.params.text } align={props.params.text.textAlign}/>
    </>
  );
};

export default CtaButton;