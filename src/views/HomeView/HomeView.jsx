// @flow

import React from 'react';

import HelloContainer from 'containers/HelloContainer';

import styles from './styles.css';

const HomeView = () => {
  return (
    <div className={styles.container}>

      <HelloContainer />
    </div>
  );
};

export default HomeView;
