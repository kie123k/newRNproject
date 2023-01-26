/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesturnpe-handler';
import styles from '../../styles/styles';
import FeedPage from './FeedPage';
import MsgPage from './MsgPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
const drawer = createDrawerNavigator();

function MainPage() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <NavigationContainer>
        <drawer.Navigator
          initialRouteName="Feed"
          // horizontal
          // pagingEnabled
          // nestedScrollEnabled
          style={styles.container}>
          <drawer.Screen name="Feed" component={FeedPage} />
          <drawer.Screen name="Msg" component={MsgPage} />
        </drawer.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
 
export default MainPage;