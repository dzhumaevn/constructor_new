import React from "react";
import styles from './ProgressBar.module.sass';

const ProgressBar = ({ progressValue }) => {
  return (
    <>
      <div className={ styles.progress }>
        <span className={ styles.progressBar } style={ { width: progressValue + '%' } }></span>
      </div>
      <p className={ styles.textWrapper }>
        <span>Рендерим🥰</span>
        <span>{ progressValue }%</span>
      </p>
    </>
  );
};

export default ProgressBar;