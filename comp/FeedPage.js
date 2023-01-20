/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import TopFrame from './MainPage/TopFrame';
import BotFrame from './MainPage/BotFrame';
import FeedList from './MainPage/Feed/FeedList';

function FeedPage (){
  
  return (
    <SafeAreaView style={styles.container}>
      <TopFrame />
      <FeedList />
      <BotFrame />
    </SafeAreaView>
  );
}
 
export default FeedPage;