/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Component} from 'react';
import styles from '../../styles/styles';

class MsgPage extends Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <FlatList />
      </SafeAreaView>
    );
  }
}
export default MsgPage;