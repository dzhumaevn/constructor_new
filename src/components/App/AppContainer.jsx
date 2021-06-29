import { connect } from "react-redux";
import App from "./App";
import { setLoadingStatusActionCreator } from "../../redux/reducers/loaderReducer/loaderReducer";

const mapStateToProps = (state) => {
  return {
    isLoading: state.loader.isLoading,
    hasComponents: !!state.components.components,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingStatus: (status) => dispatch(setLoadingStatusActionCreator(status)),
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;