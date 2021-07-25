import React from "react";
import StageComponentContainer from "../StageComponent/StageComponentContainer";
import LoaderContainer from "../Loader/LoaderContainer";
import { NavLink, Route, Switch } from "react-router-dom";
import './App.css';
import SportEventsFormContainer from "../SportEventForm/SportEventsFormContainer";

const App = (props) => {
  if ( props.isLoading ) {
    return <LoaderContainer />;
  }

  return (
    <>
      <NavLink to={ process.env.PUBLIC_URL }>Главная</NavLink>
      {
        props.hasSportEvents
          ? <NavLink to={ process.env.PUBLIC_URL + '/rendered-content' }> Отрисованные</NavLink>
          : null
      }
      <div id='app'>

        <Switch>
          <Route path={ process.env.PUBLIC_URL + '/data-input' } component={ SportEventsFormContainer } />
          <Route path={ process.env.PUBLIC_URL + '/rendered-content' } component={ StageComponentContainer } />
          <Route component={ SportEventsFormContainer } />
        </Switch>
      </div>
    </>
  );
};

export default App;
