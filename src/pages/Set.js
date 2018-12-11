import React from 'react'
import {View,Text} from 'react-native'
import { BackImg } from "../assets/js/ImgConfig"
import {SafeAreaView} from 'react-navigation'
import {ListRow} from 'teaset'
import SideBar from '../components/SideBar'

export default class Set extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible:false
  };
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#1b9fe2"}}>
        <SideBar
          title="设置"
          leftImg={BackImg}
          backgroundColor={"#1b9fe2"}
          onLeftPress={() => this.props.navigation.goBack()}
        />
        <View style={{flex:1,backgroundColor:"#F2F6FC",paddingTop:10}}>
          <ListRow title='账号安全' detail={<Text style={{color:"#8CFF40"}}>已验证</Text>} accessory="auto"/>
          <ListRow title='清除缓存' detail="" accessory="auto"/>
          <ListRow title='反馈意见' detail="" accessory="auto"
            onPress={()=>{

            }}
          />
          <ListRow title='为我打分' detail="" accessory="auto"
            onPress={()=>{
              
            }}
          />
          <ListRow title='将博客分享给朋友们' detail="" accessory="auto"
            onPress={()=>{
              
            }}
          />
          <View style={{flex:1,alignItems:'center',paddingVertical:8}}>
            <Text>博客v0.0.1</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
