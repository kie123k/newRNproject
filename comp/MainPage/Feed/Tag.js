import React from 'react';
import {View, Text} from 'react-native';
import {Component} from 'react';
import styles from '../../../styles/styles';


class Tag extends Component{
  render() {
    const {tag} = this.props;
    return (
      <View
        style={{
          position: 'absolute',
          left: tag.x,
          top: tag.y,
          width: 50,
          height: 20,
          backgroundColor: 'black',
          opacity: 1,
        }}>
        <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>
          {tag.tag_user}
        </Text>
      </View>
    );
  }
}
export default Tag;