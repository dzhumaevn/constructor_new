import { Group } from "react-konva";

const SportEvent = ({ fileName, x, y, width, height, children }) => {
  const clip = { x: 0, y: 0, width, height };

  return (
    <Group name='sportEvent'
           fileName={ fileName }
           clip={ clip }
           x={ x }
           y={ y }
           width={ width }
           height={ height }
    >
      { children }
    </Group>
  );
};

export default SportEvent;