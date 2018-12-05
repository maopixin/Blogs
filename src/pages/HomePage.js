import React from 'react';
import { View ,StyleSheet ,StatusBar ,Platform} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../components/FacebookTabBar'
import {Toast} from 'teaset'
import Page3 from './Page3'
import Page4 from './Page4'

const isAndroid = Platform.OS == "android"
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    tabBarLabel:"首页",
    navBarHidden: true,
    headerStyle:isAndroid?{
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,0.2)",
    }:{},
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
      if(isAndroid){
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
      <View style={{flex:1}}>
        <ScrollableTabView
          renderTabBar={() => <FacebookTabBar />}
        >
          <Page3 tabLabel="技术心得" navigation={navigation} style={styles.tabView}/>
          <Page4 tabLabel="生活随笔" navigation={navigation} style={styles.tabView}/>
        </ScrollableTabView>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  searchBtn:{
    paddingRight:10,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
})
