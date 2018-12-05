import React from 'react';
import { View, Text, Button ,StyleSheet ,Platform ,StatusBar} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import {Toast} from 'teaset'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Page1 extends React.Component {
  static navigationOptions = {
    title: '我的收藏',
    headerRight: (
      <View style={{paddingRight:20,}}>
        <Anticon name='search1' size={20} color="#1b9fe2"
          onPress={()=>{
            Toast.sad('搜索功能暂未开放');
          }}
        />
      </View>
    ),
  };
  state = {
    messages: [],
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      // 指定状态栏是否透明。设置为true(沉浸式)
      if(Platform.OS == "android"){
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('rgba(0,0,0,0.4)');
      }
    });
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }
  
  componentWillUnmount() {
    this._navListener.remove();
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        placeholder=""
        user={{
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  searchBtn:{
    paddingRight:10,
  }
})
