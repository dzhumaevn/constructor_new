import CustomRectContainer from "../CustomRect/CustomRectContainer";

const LineOnCenter = props => {
  const { width, height, x, y, fill } = props.params;

  return (
    <CustomRectContainer { ...props.params } width={ width } height={ height } x={ x } y={ y } fill={ fill } />
  );
};

export default LineOnCenter;