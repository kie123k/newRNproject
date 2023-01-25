/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { View, ScrollView } from 'react-native'
// import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';
import FeedPage from './FeedPage';
import MsgPage from './MsgPage';

function MainPage() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        // horizontal
        // pagingEnabled
        // nestedScrollEnabled
        style={styles.container}>
        <FeedPage />
        {/* <MsgPage /> */}
      </View>
    </KeyboardAvoidingView>
  );
}
 
export default MainPage;