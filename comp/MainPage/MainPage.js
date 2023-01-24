/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native'
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler'
import styles from '../../styles/styles';
import FeedPage from './FeedPage';
import MsgPage from './MsgPage';

function MainPage() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <GestureHandlerScrollView
        horizontal
        pagingEnabled
        disableScrollViewPanResponder
        style={styles.container}>
        <FeedPage />
        <MsgPage />
      </GestureHandlerScrollView>
    </KeyboardAvoidingView>
  );
}
 
export default MainPage;