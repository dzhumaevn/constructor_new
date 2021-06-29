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
      history.push('/rendered-content');
    }
  });

  if ( props.isLoading ) {
    return <Loader />;
  }

  return (
    <>
      <NavLink to='/' exact>Главная</NavLink>
      { props.hasComponents ? <NavLink to='/rendered-content' exact> Отрисованные</NavLink> : null }
      <div id='app'>
        <Route path='/data-input' exact component={ SportEventsFormContainer } />
        <Route path='/rendered-content' component={ StageComponentContainer } />
        <Route path='/' exact component={ SportEventsFormContainer } />
      </div>
    </>
  );
};

export default App;
