import React from "react";
import CustomTextContainer from "../CustomText/CustomTextContainer";
import CustomRectContainer from "../CustomRect/CustomRectContainer";

const Coefficients = (props) => {
  const coefsContent = props.params.map(c => {
    const { name, value, bg } = c;

    return (
      <React.Fragment key={ c.name.text + Math.random().toFixed(3) }>
        <CustomTextContainer { ...name }/>
        <CustomRectContainer { ...bg } />
        <CustomTextContainer { ...value } align={value.textAlign} />
      </React.Fragment>
    );
  });

  return (
    <>
      { coefsContent }
    </>
  );
};

export default Coefficients;