import { Prompt } from "react-router-dom";
import React from "react";

const OnLeavePageComponentHandler = () => {
  return (
    <Prompt message={
      (location) => {
        const curPath  = window.location.pathname,
              linkPath = location.pathname;

        if ( curPath !== linkPath ) {
          return 'Если Вы покинете страницу, отрисованные баннеры буду утеряны. Покинуть страницу?';
        }
      }
    } />
  );
};

export default OnLeavePageComponentHandler;