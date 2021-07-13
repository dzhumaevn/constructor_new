import React, { useState } from "react";
import { Circle, Group, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

const CustomImage = props => {
  const [ image ] = useImage(props.imageUrl, 'Anonymous');
  const [ isWithStroke, setIsWithStroke ] = useState(props.isWithStroke);
  const [ isRounded, setIsRounded ] = useState(props.isRounded);
  const { x, y, width, height } = props;

  const STROKE_WIDTH = 8;

  const clipFunc = ctx => {
    ctx.arc(
      x + (width / 2) + (STROKE_WIDTH / 2),
      y + (width / 2) + (STROKE_WIDTH / 2),
      width / 2 - STROKE_WIDTH * 1.5,
      0,
      Math.PI * 2,
      false
    );
  };

  const onContextMenuClicked = e => {
    setIsWithStroke(true);
    setIsRounded(true);
    props.contextMenuHandler(e);
  };

  const dbClHandler = e => {
    setIsWithStroke(!isWithStroke);
    setIsRounded(!isRounded);
  };

  return (
    <Group onDblClick={ dbClHandler }>
      {
        isWithStroke && <Circle listening={ false }
                                x={ x + (width / 2) + (STROKE_WIDTH / 2) }
                                y={ y + (width / 2) + (STROKE_WIDTH / 2) }
                                radius={ (width / 2) - STROKE_WIDTH }
                                stroke={ '#DDDDDD' }
                                strokeWidth={ STROKE_WIDTH } />
      }
      <Group clipFunc={ isRounded && clipFunc }>
        <KonvaImage image={ image }
                    onContextMenu={ onContextMenuClicked }
                    width={ width - STROKE_WIDTH }
                    height={ height - STROKE_WIDTH }
                    x={ x + STROKE_WIDTH }
                    y={ y + STROKE_WIDTH }
        />
      </Group>
    </Group>
  );
};

export default CustomImage;