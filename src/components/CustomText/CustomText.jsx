import { Text } from "react-konva";
import { useRef } from "react";

const CustomText = props => {
  const textComponent = useRef();

  const dbClickHandler = e => {
    props.textEditor(e, textComponent.current);
  };
  console.log(props)
  return (
    <Text ref={ textComponent } onDblClick={ dbClickHandler } { ...props } lineHeight={ 1.2 } />
  )
};

export default CustomText;