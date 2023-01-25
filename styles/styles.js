import {StyleSheet, Dimensions} from 'react-native';


const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
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
    justifyContent: 'flex-start',
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
  post_bottom: {
    height: 50,
    backgroundColor: 'blue',
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

export default styles;