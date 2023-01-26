/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from '../../styles/styles';
import TopFrame from './TopFrame';
import FeedList from './Feed/FeedList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MsgPage from './MsgPage';


const botTab = createBottomTabNavigator();
const stack = createMaterialTopTabNavigator();
const Home = () => (
  <>
    <TopFrame />
    <FeedList />
  </>
)
const Reel = () => (
  <></>
)
const Search = () => (
  <></>
)
const Shop = () => (
  <></>
)
const Info = () => (
  <></>
)
const Tabs = () => (
  <SafeAreaView style={styles.container}>
    <botTab.Navigator>
      <botTab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <botTab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}/>
      <botTab.Screen name="Reel" component={Reel} />
      <botTab.Screen name="Shop" component={Shop} />
      <botTab.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}/>
    </botTab.Navigator>
  </SafeAreaView>
)
const Feedpage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <stack.Navigator tabBar={() => null}>
        <stack.Screen
          name="bTabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <stack.Screen name="Msg" component={MsgPage} />
      </stack.Navigator>
    </SafeAreaView>
  );
}
 
export default Feedpage;