import { Text } from "react-konva";
import React from "react";
import MainBackground from "../MainBackground/MainBackground";

const ErrorFallback = props => {
  const mainParams = props.sportEvent.params.mainParams;

  return (
    <>
      <MainBackground x={ mainParams.x }
                      y={ mainParams.y }
                      width={ mainParams.width }
                      height={ mainParams.height }
                      strokeWidth={ 10 }
                      stroke={ '#ff0000' }
                      listening={ false }
      />
      <Text text={ props.sportEvent.info.inputStringData }
            width={ mainParams.width }
            height={ mainParams.height }
            padding={ 50 }
            fontSize={ 70 }
            fill={ '#ff0000' }
            align='center'
            verticalAlign='middle'
            listening={ false }
      />
    </>
  );
};

export default ErrorFallback;