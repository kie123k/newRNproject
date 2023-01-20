import {Component, useState} from 'react';
import React from 'react';
import {
  Dimensions,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from '../../../styles/styles';
import TagList from './TagList';


class FeedImgList extends Component {
  render() {
    const {data} = this.props;
    const width = Dimensions.get('screen').width;

    const renderPage = ({item}) => <Postimg img={item} />;
    const Postimg = ({img}) => (
      <View style={styles.post_imgcon} key={img.seq}>
        <View style={styles.post_imgcon}>
          <ImageBackground
            source={{uri: img.src}}
            style={
              ([styles.post_img2], {height: width * img.ratio, width: width})
            }>
              {/* <Tags img={img} /> */}
            <TagList img={img} />
          </ImageBackground>
        </View>
      </View>
    );
  // const Tags = ({img}) => (
  //   
  // );
    return (
      <SwiperFlatList
        showPagination
        data={data}
        style={[styles.post_img]}
        renderItem={renderPage}
        keyExtractor={item => item.seq}
      />
    );
  }
}

FeedImgList.defaultProps = {
  imgs: [],
};

export default FeedImgList;