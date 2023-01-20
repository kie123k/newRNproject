import {useState} from 'react';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import Tag from './Tag';


function TagList({img}) {
  const [cimgId, setTagVisibile] = useState('');
  const toggleTag = img => {
    console.log('new' + img.imgid);
    console.log('pre' + cimgId);
    let a = img.imgid === cimgId ? '' : img.imgid;
    console.log('newone' + a);
    setTagVisibile(a);
    console.log('now' + cimgId);
  };
    
  return(
    <TouchableOpacity
      style={{flex: 1, opacity: cimgId == img.imgid ? 0 : 100}}
      onPress={() => {
        toggleTag(img);
      }}>
      {img.tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </TouchableOpacity>
  );
}

export default TagList;