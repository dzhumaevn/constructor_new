import { connect, Provider } from "react-redux";
import App from "./App";
import { setLoadingStatusActionCreator } from "../../redux/reducers/loaderReducer/loaderReducer";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isLoading: state.loader.isLoading,
    hasSportEvents: !!state.sportEvents.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingStatus: (status) => dispatch(setLoadingStatusActionCreator(status)),
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

const MainApp = props => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <AppContainer { ...props } />
      </BrowserRouter>
    </Provider>
  );
};

export default MainApp;