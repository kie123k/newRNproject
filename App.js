/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import FeedPage from './comp/FeedPage';
import React from 'react';
import styles from './styles/styles';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FeedPage />
    </SafeAreaView>
  );
};

export default App;
