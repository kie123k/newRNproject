/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Children, useState, useEffect} from 'react';
import type {Node} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Overlay,
  Button,
  ImageBackground,
} from 'react-native';
import SwipeMain from './comp/SwipeMain';

const feedData = [
  {
    post_id: 0,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_1',
    ratio: 1,
    imgs: [
      {
        seq: '1',
        imgid: '11',
        src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg',
        ratio: 1,
        tags: [
          {
            x: 0,
            y: 0,
            tag_user: 'iu_11',
          },
          {
            x: 50,
            y: 50,
            tag_user: 'iu_12',
          },
        ],
      },
      {
        seq: '2',
        imgid: '12',
        src: 'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg',
        ratio: 1,
        tags: [
          {
            x: 0,
            y: 0,
            tag_user: 'iu_21',
          },
          {
            x: 50,
            y: 50,
            tag_user: 'iu_22',
          },
        ],
      },
    ],
    contents: '아이유',
    replies: [
      {
        user_icon:
          'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/08/154e3c28-abec-4194-9306-4f754bb78d99.jpg',
        user_id: 'younha',
        reply: 'ㄹㅇㅋㅋ',
      },
      {
        user_icon:
          'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/08/154e3c28-abec-4194-9306-4f754bb78d99.jpg',
        user_id: 'younha',
        reply: 'ㄹㅇㅋㅋ만치라고',
      },
    ],
  },
  {
    post_id: 1,
    user_icon:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/08/154e3c28-abec-4194-9306-4f754bb78d99.jpg',
    user_id: 'younha',
    ratio: 1.5,
    tagopacity: 0,
    imgs: [
      {
        seq: '1',
        imgid: '21',
        src: 'https://image.bugsm.co.kr/album/images/500/40734/4073469.jpg',
        ratio: 1,
        tags: [
          {
            x: 0,
            y: 0,
            tag_user: 'iu_31',
          },
          {
            x: 50,
            y: 50,
            tag_user: 'iu_32',
          },
        ],
      },
      {
        seq: '2',
        imgid: '22',
        src: 'https://cdn.ize.co.kr/news/photo/202211/54132_65032_226.jpg',
        ratio: 1.5,
        tags: [
          {
            x: 0,
            y: 0,
            tag_user: 'iu_41',
          },
          {
            x: 50,
            y: 50,
            tag_user: 'iu_42',
          },
        ],
      },
    ],
    contents: '사건의 지평선',
    replies: [
      {
        user_icon:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
        user_id: 'iu_1',
        reply: 'ㅊㅋ',
      },
    ],
  },
];
const StoryData = [
  {
    id: 0,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_11',
  },
  {
    id: 1,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_12',
  },
  {
    id: 2,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_13',
  },
  {
    id: 3,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_14',
  },
  {
    id: 4,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_15',
  },
  {
    id: 5,
    user_icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/375px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg',
    user_id: 'iu_16',
  },
];
const App: () => Node = () => {
  // const postimgListMemo = React.memo(Postimg);
  const [cimgId, setTagVisibile] = useState('');
  const toggleTag = img => {
    console.log('new' + img.imgid);
    console.log('pre' + cimgId);
    let a = img.imgid === cimgId ? '' : img.imgid;
    console.log('newone' + a);
    setTagVisibile(a);
    console.log('now' + cimgId);
  };
  const renderItem = ({item}) => <Feed feed={item} />;
  const Feed = ({feed}) => (
    <View style={([styles.post], {height: feed.ratio * width + 130})}>
      <View style={styles.post_user}>
        <Image source={{uri: feed.user_icon}} style={styles.post_user_icon} />
        <Text>{feed.user_id}</Text>
      </View>
      <SwiperFlatList
        showPagination
        // ref={component => (this.a = component)}
        data={feed.imgs}
        style={[styles.post_img]}
        renderItem={renderPage}
        keyExtractor={item => item.seq}
        // extraData={this.state.refresh}
        // onChangeIndex={() => console.log(this.getCurrentIndex())}
      />
      <View style={styles.post_content}>
        <Text>{feed.contents}</Text>
      </View>
      <View style={styles.post_reply}>
        <Image
          source={{uri: feed.replies[0].user_icon}}
          style={styles.post_reply_user_icon}
        />
        <Text style={styles.post_reply_user_id}>{feed.replies[0].user_id}</Text>
        <Text>{feed.replies[0].reply}</Text>
      </View>
    </View>
  );
  const renderPage = ({item}) => <Postimg img={item} />;
  const Postimg = ({img}) => (
    <View style={styles.post_imgcon} key={img.seq}>
      <View style={styles.post_imgcon}>
        <ImageBackground
          source={{uri: img.src}}
          style={
            ([styles.post_img2], {height: width * img.ratio, width: width})
          }>
          <Tags img={img} />
        </ImageBackground>
      </View>
    </View>
  );
  const Tags = ({img}) => (
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
  const Tag = ({tag}) => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
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
  const renderStory = ({item}) => <Story story={item} />;
  const Story = ({story}) => (
    <View style={styles.storycon}>
      <Image source={{uri: story.user_icon}} style={styles.story} />
      <Text>{story.user_id}</Text>
    </View>
  );
  const StorySection = () => (
    <FlatList
      horizontal
      style={styles.stories}
      data={StoryData}
      renderItem={renderStory}
      keyExtractor={item => item.user_id}
    />
  );
  return (
    <SwipeMain style={styles.container}>
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
      <View style={styles.posts}>
        <FlatList
          data={feedData}
          ListHeaderComponent={<StorySection />}
          renderItem={renderItem}
          keyExtractor={item => item.post_id}
        />
      </View>
      <View style={styles.bot} />
    </SwipeMain>
  );
};

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topFrame: {
    height: 50,
  },
  top: {
    height: 50,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  logo: {
    flex: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  btn_post: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  stories: {
    height: 100,
    width: width,
    backgroundColor: 'powderblue',
    paddingTop: 5,
    paddingBottom: 5,
  },
  storycon: {
    height: 90,
    width: 80,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  story: {
    borderRadius: 50,
    height: 70,
    width: 70,
    backgroundColor: 'black',
  },
  posts: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  post: {
    backgroundColor: 'red',
  },
  post_user: {
    height: 50,
    backgroundColor: 'orange',
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  post_user_icon: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'yellow',
    marginRight: 10,
  },
  post_img: {
    flex: 1,
    backgroundColor: 'green',
  },
  post_imgcon: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    backgroundColor: 'navy',
  },
  post_img2: {
    flex: 1,
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  post_content: {
    height: 40,
    backgroundColor: 'blue',
  },
  post_reply: {
    height: 40,
    backgroundColor: 'navy',
    flexDirection: 'row',
    padding: 2.5,
    alignItems: 'center',
  },
  post_reply_user_icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'purple',
    marginRight: 5,
  },
  post_reply_user_id: {
    fontWeight: 'bold',
    margin: 5,
  },
  bot: {
    height: 50,
    backgroundColor: 'gray',
  },
});

export default App;
