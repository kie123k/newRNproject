import {Component} from 'react';
import React from 'react';
import {Dimensions, View, ImageBackground, FlatList} from 'react-native';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {ScrollView as ScrollView2} from 'react-native-gesture-handler';
import styles from '../../../styles/styles';
import TagList from './TagList';

// import { ScrollView } from 'react-native'
// import {FlatList} from 'react-native-gesture-handler';


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
            <TagList img={img} />
          </ImageBackground>
        </View>
      </View>
    ); 
    return (
      <FlatList
        renderScrollComponent={p => <ScrollView2 {...p} />}
        showPagination
        horizontal
        pagingEnabled
        nestedScrollEnabled
        paginationDefaultColor={'white'}
        paginationActiveColor={'black'}
        data={data}
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
