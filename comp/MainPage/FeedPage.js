/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../../styles/styles';
import TopFrame from './TopFrame';
import BotFrame from './BotFrame';
import FeedList from './Feed/FeedList';

class FeedPage extends Component {
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <TopFrame />
        <FeedList />
        <BotFrame />
      </SafeAreaView>
    );
  }
}
 
export default FeedPage;