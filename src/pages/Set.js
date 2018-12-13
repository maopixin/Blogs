import React from 'react'
import {View,Text,Vibration,Picker,Switch} from 'react-native'
import Sound from 'react-native-sound';
import Funny from '../assets/voice/funny.mp3'
import { BackImg } from "../assets/js/ImgConfig"
import {SafeAreaView} from 'react-navigation'
import {ListRow} from 'teaset'
import SideBar from '../components/SideBar'
import {connect} from 'react-redux'

// 引入action
import { setMessageVoice, setMessageVibration } from '../store/actions.js'

class Set extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible:false
  };
  render() {
    console.log(this.props)
    const {
      messageVibration,
      messageVoice,
      setMessageVoice,
      setMessageVibration
    } = this.props
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
          <ListRow
            title='是否震动'
            detail={
              <Switch 
                value={messageVibration}
                onValueChange={(status)=>{
                  setMessageVibration(status)
                }}
              />
            }
            accessory="auto"
          />
          <ListRow title='点我震动' detail="" accessory="auto"
            onPress={()=>{
              Vibration.vibrate([0,100,100,100])
            }}
          />
          <ListRow
            title='是否播放提示音'
            detail={
              <Switch 
                value={messageVoice}
                onValueChange={(status)=>{
                  setMessageVoice(status)
                }}
              />
            }
            accessory="auto"
          />
          <ListRow title='点我播放提示声(本地文件)' detail="" accessory="auto"
            onPress={()=>{
              if(messageVoice){
                const s = new Sound(Funny, (e) => {
                  if (e) {
                    console.log('播放失败');
                    return;
                  }
                  s.play(() => s.release());
                });
              }
            }}
          />
          <ListRow title='点我播放提示声(网络文件)' detail="" accessory="auto"
            onPress={()=>{
              if(messageVoice){
                const s = new Sound("https://pic.ibaotu.com/00/43/23/41F888piC5fv.mp3",null, (e) => {
                  if (e) {
                    console.log('播放失败');
                    return;
                  }
                  s.play(() => s.release());
                });
              }
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

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  console.log(state,123)
  return {
    messageVoice: state.messageVoice,
    messageVibration: state.messageVibration
  }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setMessageVoice (status) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setMessageVoice(status))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    setMessageVibration (status) {
        dispatch(setMessageVibration(status))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Set)