import React from "react";
import { Image as KonvaImage } from "react-konva";
import useImage from "use-image";

const CustomImage = props => {
  const [image] = useImage(props.imageUrl, 'Anonymous');

  return (
    <KonvaImage image={ image } onContextMenu={ props.contextMenuHandler } { ...props } />
  );
};

export default CustomImage;