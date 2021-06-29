import React, { useEffect } from "react";
import StageComponentContainer from "../StageComponent/StageComponentContainer";
import Loader from "../Loader/Loader";
import { NavLink, Route, useHistory } from "react-router-dom";
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
      <NavLink to={ process.env.PUBLIC_URL + '/' } exact>Главная</NavLink>
      { props.hasComponents ?
        <NavLink to={ process.env.PUBLIC_URL + '/rendered-content' } exact> Отрисованные</NavLink> : null }
      <div id='app'>
        <Route path={ process.env.PUBLIC_URL + '/data-input' } exact component={ SportEventsFormContainer } />
        <Route path={ process.env.PUBLIC_URL + '/rendered-content' } component={ StageComponentContainer } />
        <Route path={ process.env.PUBLIC_URL + '/' } exact component={ SportEventsFormContainer } />
      </div>
    </>
  );
};

export default App;
