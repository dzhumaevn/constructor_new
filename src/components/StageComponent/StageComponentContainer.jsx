import StageComponent from "./StageComponent";
import { addStageActionCreator } from "../../redux/reducers/stageReducer/stageReducer";
import { connect, ReactReduxContext } from "react-redux";
import StageScaler from "./StageScaler";

const mapStateToProps = ({ sportEvents }) => {
  return {
    sportEvents
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    keyUpHandler: StageScaler.onKeyUp.bind(StageScaler),
    keyDownHandler: StageScaler.onKeyDown.bind(StageScaler),
    dispatchStage: (stage) => dispatch(addStageActionCreator(stage)),
  }
};

const StageComponentContainer = connect(mapStateToProps, mapDispatchToProps)(StageComponent);

const StageComponentContainerWithStore = (props) => {
  return (
    <ReactReduxContext.Consumer>
      {
        ({ store }) => {
          return (
            <StageComponentContainer store={ store } />
          );
        }
      }
    </ReactReduxContext.Consumer>
  );
}

export default StageComponentContainerWithStore;