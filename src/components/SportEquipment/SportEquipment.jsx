import useImage from "use-image";
import CustomImageContainer from "../CustomImage/CustomImageContainer";

const SportEquipment = props => {
  const { width, height, x, y, url } = props.params;
  const [image] = useImage(url, 'Anonymous');

  return (
    <CustomImageContainer image={ image }
                          width={ width }
                          height={ height }
                          x={ x }
                          y={ y } />
  );
};

export default SportEquipment;