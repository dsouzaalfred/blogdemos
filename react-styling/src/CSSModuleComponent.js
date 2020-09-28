import React from 'react';
import styles from './CSSModule.module.css';

const CSSModuleComponent = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Test</p>
    </div>
  );
};

export default CSSModuleComponent;
