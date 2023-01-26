import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';

const TopFrame = () => {

    return (
      <View style={styles.topFrame}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.logo}>
            <Text style={{color: 'black'}}>로고</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_post}>
            <Text style={{color: 'red'}}>post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_like}>
            <Text style={{color: 'blue'}}>like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_msg} >
            <Text style={{color: 'red'}}>msg</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  export default TopFrame;