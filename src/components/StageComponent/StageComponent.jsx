import { Group, Layer, Stage } from "react-konva";
import React, { useEffect, useRef } from "react";
import { Provider } from "react-redux";
// import OnLeavePageComponentHandler from "../OnLeavePageComponentHandler/OnLeavePageComponentHandler";
import SportEventContainer from "../SportEvent/SportEventContainer";
import SportEventsDownloader from "../../utils/SportEventsDownloader";
import SportEventContent from "../SportEventContent/SportEventContent";
import KonvaNodeInteractiveMaker from "../../utils/KonvaNodeInteractiveMaker";

const StageComponent = props => {
  const stage = useRef();

  useEffect(() => {
    props.dispatchStage(stage.current);
    return () => KonvaNodeInteractiveMaker.resetInteractiveAllNodes();
  });

  const makeInteractive = e => {
    KonvaNodeInteractiveMaker.makeInteractive(e.target, stage.current.children[0]);
  };

  const onKeyDown = (e) => {
    e.preventDefault();

    if ( e.key === 'Shift' ) {
      stage.current.on('click', makeInteractive);
    }

    props.keyDownHandler(e, stage.current);
  };

  const onKeyUp = (e) => {
    e.preventDefault();

    if ( e.key === 'Shift' ) {
      KonvaNodeInteractiveMaker.resetInteractiveAllNodes();
      stage.current.off('click', makeInteractive);
    }

    props.keyUpHandler(e, stage.current);
  };

  const onButtonClicked = () => {
    const sportEvents = stage.current.find('#sportEventsGroup');
    SportEventsDownloader.download(stage.current, sportEvents[0].children);
  };

  const content = props.sportEvents.map(sportEvent => {
    return (
      <SportEventContainer sportEvent={ sportEvent }
                           key={ sportEvent.params.id }
                           stage={ stage }
                           x={ sportEvent.params.mainParams.x }
                           y={ sportEvent.params.mainParams.y }
                           width={ sportEvent.params.mainParams.width }
                           height={ sportEvent.params.mainParams.height }
                           fileName={ sportEvent.params.fileName }
      >
        <SportEventContent sportEvent={ sportEvent } />
      </SportEventContainer>
    );
  });

  return (
    <div className='innerWrapper'
         onKeyDown={ onKeyDown }
         onKeyUp={ onKeyUp }
         tabIndex={ -1 }
         style={ { background: '#E8E8E8' } }
    >

      {/*<OnLeavePageComponentHandler />*/ }
      <button onClick={ onButtonClicked }>Скачать</button>

      <Stage ref={ stage }
             width={ window.innerWidth }
             height={ window.innerHeight }
             draggable={ true }
             overflow={ 'hidden' }
             scale={ { x: 0.2, y: 0.2 } }
      >
        <Provider store={ props.store }>
          <Layer name='sportEventsLayer'>
            <Group id='sportEventsGroup'>
              { content }
            </Group>
          </Layer>
        </Provider>
      </Stage>

    </div>
  );
};

export default StageComponent;