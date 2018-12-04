import React from 'react';
import { View, Text, Button ,StyleSheet ,Platform ,StatusBar} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import {Toast} from 'teaset'

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
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      // 指定状态栏是否透明。设置为true(沉浸式)
      if(Platform.OS == "android"){
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('rgba(0,0,0,0.4)');
      }
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我的收藏</Text>
        <Button
          title="去首页"
          onPress={() => {
            navigation.navigate('Home',{
              name:"mao",
              collection:true
            })
          }}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  searchBtn:{
    paddingRight:10,
  }
})
