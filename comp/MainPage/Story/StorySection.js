import {Component} from 'react';
import React from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import styles from '../../../styles/styles';

class StorySection extends Component {
  render() {
    const {data} = this.props;
    const renderStory = ({item}) => <Story story={item} />;
    const Story = ({story}) => (
      <View style={styles.storycon}>
        <Image source={{uri: story.user_icon}} style={styles.story} />
        <Text>{story.user_id}</Text>
      </View>
    );
    return (
      <FlatList
        horizontal
        style={styles.stories}
        data={data}
        renderItem={renderStory}
        keyExtractor={item => item.user_id}
      />
    );
  }
}

StorySection.defaultProps = {
  StoryData: [],
};

export default StorySection;
