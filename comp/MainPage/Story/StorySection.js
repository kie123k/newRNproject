import {Component} from 'react';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../../styles/styles';
import {FlatList} from 'react-native-gesture-handler';

class StorySection extends Component {
  render() {
    const {data} = this.props;
    const renderStory = ({item}) => <Story story={item} />;
    const Story = ({story}) => (
      <TouchableOpacity style={styles.storycon}>
        <Image source={{uri: story.user_icon}} style={styles.story} />
        <Text>{story.user_id}</Text>
      </TouchableOpacity>
    );
    return (
      <ScrollView
      nestedScrollEnabled>
        <FlatList
          nestedScrollEnabled
          horizontal
          style={styles.stories}
          data={data}
          renderItem={renderStory}
          keyExtractor={item => item.user_id}
        />
      </ScrollView>
    );
  }
}

StorySection.defaultProps = {
  StoryData: [],
};

export default StorySection;
