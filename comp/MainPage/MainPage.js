/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styles from '../../styles/styles';
import FeedPage from './FeedPage';



// const Tab = createBottomTabNavigator();
export default function MainPage() {

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Tab.Navigator>
        <Tab.Screen
          name='tabFeed'
          component={FeedPage} 
          options={{headerShown: false}}/>
        <Tab.Screen
          name='tabMsg'
          component={MsgPage} 
          options={{headerShown: false}}/>
      </Tab.Navigator> */}
      {/* <TabView
        navigationState={{ index, routes }}
        renderTabBar={() => null}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={styles.container}>
      </TabView> */}
      <FeedPage />
    </KeyboardAvoidingView>
  );
}
 
// export default MainPage;