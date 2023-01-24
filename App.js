/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import MainPage from './comp/MainPage/MainPage';
import React from 'react';
import styles from './styles/styles';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainPage />
    </SafeAreaView>
  );
};

export default App;
