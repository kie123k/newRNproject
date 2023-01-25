import {Component} from 'react';
import React from 'react';
import {View, FlatList, Image, Text, Dimensions} from 'react-native';
import styles from '../../../styles/styles';
import StorySection from '../Story/StorySection';
import feedData from '../../../data/feedData';
import StoryData from '../../../data/storyData';
import FeedImgList from './FeedImgList';

class FeedList extends Component {
  render() {
    const width = Dimensions.get('screen').width;
    const renderItem = ({item}) => <Feed feed={item} />;
    const Feed = ({feed}) => (
      <View style={([styles.post], {height: feed.ratio * width + 180})}>
        <View style={styles.post_user}>
          <Image source={{uri: feed.user_icon}} style={styles.post_user_icon} />
          <Text>{feed.user_id}</Text>
        </View>
        <FeedImgList data={feed.imgs} />
        <View style={styles.post_bottom}>
          <Text>dd</Text>
        </View>
        <View style={styles.post_content}>
          <Text>{feed.contents}</Text>
        </View>
        <View style={styles.post_reply}>
          <Image
            source={{uri: feed.replies[0].user_icon}}
            style={styles.post_reply_user_icon}
          />
          <Text style={styles.post_reply_user_id}>
            {feed.replies[0].user_id}
          </Text>
          <Text>{feed.replies[0].reply}</Text>
        </View>
      </View>
    );
    return (
      <View style={styles.posts}>
        <FlatList
          nestedScrollEnabled
          data={feedData}
          ListHeaderComponent={<StorySection data={StoryData}/>}
          renderItem={renderItem}
          keyExtractor={item => item.post_id}
        />
      </View>
    )
  }
}

export default FeedList;