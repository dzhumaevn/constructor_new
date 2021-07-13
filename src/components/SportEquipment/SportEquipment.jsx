import CustomImageContainer from "../CustomImage/CustomImageContainer";

const SportEquipment = props => {
  const { width, height, x, y, url } = props.params;

  return (
    <CustomImageContainer imageUrl={ url }
                          width={ width }
                          height={ height }
                          x={ x }
                          y={ y } />
  );
};

export default SportEquipment;