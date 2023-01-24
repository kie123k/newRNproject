import {useState} from 'react';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import Tag from './Tag';


function TagList({img}) {
  const [opacity, setTagVisibile] = useState(0);
  const toggleTag = d => {
    console.log(d);
    let a = d == 0 ? 100 : 0;
    console.log(a);
    setTagVisibile(a);
  };
    
  return(
    <TouchableOpacity
      style={{flex: 1, opacity: opacity}}
      onPress={() => {
        toggleTag(opacity);
      }}>
      {img.tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </TouchableOpacity>
  );
}

export default TagList;