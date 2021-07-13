import React, { useEffect } from "react";
import StageComponentContainer from "../StageComponent/StageComponentContainer";
import Loader from "../Loader/Loader";
import { NavLink, Route, useHistory, Switch } from "react-router-dom";
import './App.css';
import SportEventsFormContainer from "../SportEventForm/SportEventsFormContainer";

const App = (props) => {
  const history = useHistory();

  useEffect(() => {
    if ( props.hasComponents ) {
      history.push(process.env.PUBLIC_URL + '/rendered-content');
    }
  });

  if ( props.isLoading ) {
    return <Loader />;
  }

  return (
    <>
      <NavLink to={ process.env.PUBLIC_URL }>Главная</NavLink>
      {
        props.hasComponents
          ? <NavLink to={ process.env.PUBLIC_URL + '/rendered-content' }> Отрисованные</NavLink>
          : null
      }
      <div id='app'>

        <Switch>
          <Route path={ process.env.PUBLIC_URL + '/data-input' } component={ SportEventsFormContainer } />
          <Route path={ process.env.PUBLIC_URL + '/rendered-content' } component={ StageComponentContainer } />
          <Route path={ process.env.PUBLIC_URL } component={ SportEventsFormContainer } />
        </Switch>
      </div>
    </>
  );
};

export default App;
