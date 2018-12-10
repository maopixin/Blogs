import React from 'react';
import { View ,StyleSheet ,StatusBar ,Platform,BackHandler,ToastAndroid} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../components/FacebookTabBar'
import SplashScreen from 'react-native-splash-screen'
import {Toast} from 'teaset'
import Page3 from './Page3'
import Page4 from './Page4'

const isAndroid = Platform.OS == "android"
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    headerStyle:isAndroid?{
      borderBottomWidth:1,
      borderBottomColor:"rgba(0,0,0,0.2)",
      marginTop:StatusBar.currentHeight
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

  componentWillMount() {
    // 隐藏启动图
    SplashScreen.hide();
  }
  componentDidMount() {
    if(isAndroid){
      this._willBlur = this.props.navigation.addListener(
        
        'willBlur',
        payload => {
          this.backHandler.remove()
        }
      );
      this._didFocus = this.props.navigation.addListener(
        'didFocus',
        payload => {
          this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
              //最近2秒内按过back键，可以退出应用。
              BackHandler.exitApp();
              return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出博客', ToastAndroid.SHORT);
            return true;
          });
        }
      );
    }
  }

  componentWillUnmount() {
    this._didFocus.remove()
    this._willBlur.remove()
  }
  render() {
    const {navigation} = this.props
    console.log(this.props)
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
