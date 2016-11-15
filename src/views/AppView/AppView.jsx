// @flow

import React from 'react';
import { Match, Miss } from 'react-router';

import NotFound from 'components/NotFound';

import HomeView from 'views/HomeView';

import styles from './styles.css';

const AppView = () => {
  return (
    <div className={styles.container}>

      <Match exactly pattern="/" component={HomeView} />
      <Miss component={NotFound} />
    </div>
  );
};

export default AppView;
