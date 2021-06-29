import CustomRectContainer from "../CustomRect/CustomRectContainer";

const LineOnCenter = props => {
  const { width, height, x, y, fill } = props.params;

  return (
    <CustomRectContainer width={ width } height={ height } x={ x } y={ y } fill={ fill } />
  );
};

export default LineOnCenter;