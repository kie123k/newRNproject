import {Component} from 'react';
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';

class TopFrame extends Component {
  render() {
    return (
      <View style={styles.topFrame}>
        <View style={styles.top}>
          <View style={styles.logo}>
            <Text style={{color: 'black'}}>로고</Text>
          </View>
          <View style={styles.btn_post}>
            <Text>post</Text>
          </View>
          <View style={styles.btn_post}>
            <Text>like</Text>
          </View>
          <View style={styles.btn_post}>
            <Text>msg</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TopFrame;