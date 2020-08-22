import React from 'react';

import htmlIcon from 'Assets/icons/technologies/html.png';
import cssIcon from 'Assets/icons/technologies/css.png';
import jsIcon from 'Assets/icons/technologies/js.png';

import styles from './technologies.module.scss';

function TechPlate(imgUrl, techName) {
  return (
    <div className={styles.plate}>
      <img
        src={imgUrl}
        alt={`${techName} логотип`}
        className={styles.icon}
      />
      <span className={styles.techName}>
        { techName }
      </span>
    </div>
  );
}

export function Technologies() {
  return (
    <div className={styles.block}>
      <div className={styles.cell}>
        { TechPlate(htmlIcon, 'html 5') }
      </div>
      <div className={styles.cell}>
        { TechPlate(cssIcon, 'css') }
      </div>
      <div className={styles.cell}>
        { TechPlate(jsIcon, 'Java Script') }
      </div>
    </div>
  );
}
