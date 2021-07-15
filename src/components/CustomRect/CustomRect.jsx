import { Rect } from "react-konva";
import { useRef } from "react";

const CustomRect = props => {
  const node = useRef();
  return <Rect ref={ node } { ...props } onContextMenu={ props.contextMenuHandler } />
};

export default CustomRect;