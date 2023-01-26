import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';


function BotFrame() {
    return (
      
        <View style={styles.bot} >
          <TouchableOpacity style={styles.bot_home}><Text>HOME</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bot_search}><Text>SEARCH</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bot_reels}><Text>REELS</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bot_shop}><Text>SHOP</Text></TouchableOpacity>
          <TouchableOpacity style={styles.bot_userinfo}><Text>INFO</Text></TouchableOpacity>
        </View>

    )
}

export default BotFrame;