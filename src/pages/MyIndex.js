import React from 'react';
import { View, Text ,StyleSheet,Image ,StatusBar,TextInput,ScrollView,Platform,AsyncStorage} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import {Toast,ListRow,Label,Button} from 'teaset'

export default class MyIndex extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible:false
  };
  state = {
    rows:[
      {
        title:"游乐园",
        icon:require("../assets/image/clerk_profession_icn.png"),
        detail:"4"
      },
      {
        title:"纸飞机",
        icon:require("../assets/image/coder.png"),
        detail:"20"
      },
      {
        title:"审核专区",
        icon:require("../assets/image/dx.png"),
        detail:"5"
      },
      {
        title:"最右勋章",
        icon:require("../assets/image/gcs.png"),
        detail:"8"
      },
      {
        title:"我的跟拍",
        icon:require("../assets/image/his.png"),
        detail:"14"
      },
      {
        title:"我的帖子",
        icon:require("../assets/image/lzfsb.png"),
        detail:"3"
      },
      {
        title:"我的评论",
        icon:require("../assets/image/my.png"),
        detail:"9"
      },
      {
        title:"我的收藏",
        icon:require("../assets/image/per.png"),
        detail:"5"
      },
      {
        title:"我的收藏",
        icon:require("../assets/image/state.png"),
        detail:"1"
      },
      {
        title:"我的收藏",
        icon:require("../assets/image/test.png"),
        detail:"200"
      },
      {
        title:"我的收藏",
        icon:require("../assets/image/ss.png"),
        detail:"200"
      },
    ],
    login:null
  };
  
  componentDidMount() {
    this._didFocus = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.getData("userName").then((login)=>{
          this.setState({
            login
          })
        })
      }
    );
  }
  componentWillUnmount() {
    this._didFocus.remove()
  }
  getData(key) {
    return AsyncStorage.getItem(key).then((value) => {
      return value;
    });
  }
  _removeData = async (key,val) => {
    try {
      await AsyncStorage.removeItem(key,val);
    } catch (error) {
      // Error saving data
    }
  }
  render() {
    const {navigation} = this.props
    return (
      <ScrollView style={{ flex: 1 ,backgroundColor:"#D4D6D6"}}>
        <Image
          style={styles.bg}
          source={require('../assets/image/akm.jpeg')}
        />
        <View style={styles.bgContent}>
          <View style={styles.setPage}>
            <View style={styles.setBox}>
              <Anticon 
                name='setting'
                size={15}
                color="#fff"
                onPress={()=>{
                  this.props.navigation.navigate("Set");
                }}
              />
            </View>
            <View style={styles.zone}>
              <Text style={styles.zoneText}>空间动态</Text>
              <Anticon name="doubleright" size={10} color="#C0C4CC"/>
            </View>
          </View>
          {
            this.state.login
            ?
            (
              <View style={styles.userInfo}>
                <Image
                  style={styles.head}
                  source={require('../assets/image/head.jpeg')}
                />
                <View style={styles.userName}>
                  <Text style={styles.name}>十年雪落</Text>
                  <View style={[styles.sex,{backgroundColor:"#1b9fe2"}]}>
                    <Anticon name={"man"} size={10} color="#ffffff"/>
                  </View>
                  <View style={[styles.sex,{backgroundColor:"rgb(249,204,226)"}]}>
                    <Anticon name={"woman"} size={10} color="#ffffff"/>
                  </View>
                </View>
                <Text style={{fontSize:10,color:"#FFFFFF",paddingLeft:6}}>ID:3870584</Text>
                <View style={styles.autograph}>
                  <Text style={{fontSize:12,color:"#ffffff"}}>我是AKM,想成为哒哒哒冒蓝火的加特林</Text>
                  <Anticon 
                    name="edit" 
                    size={12} 
                    color="#fff" 
                    style={{marginTop:2}}
                    onPress={()=>{
                      Toast.sad('别乱摸，还不能修改呢');
                    }}
                  />
                </View>
                <View style={styles.txts}>
                  <View style={styles.txt}>
                    <Text style={{fontSize:16,color:"#fff",marginRight:4}}>998</Text>
                    <Text style={{fontSize:12,color:"#fff"}}>获赞</Text>
                  </View>
                  <View style={styles.txt}>
                    <Text style={{fontSize:16,color:"#fff",marginRight:4}}>3</Text>
                    <Text style={{fontSize:12,color:"#fff"}}>关注</Text>
                  </View>
                  <View style={styles.txt}>
                    <Text style={{fontSize:16,color:"#fff",marginRight:4}}>1280</Text>
                    <Text style={{fontSize:12,color:"#fff"}}>粉丝</Text>
                  </View>
                </View>
              </View>
            )
            :
            (
              <View style={{position:"absolute",left:20,bottom:20}}>
                <Button
                  type="primary"
                  title="登录"
                  onPress={()=>{
                    this.props.navigation.navigate("Login")
                  }}
                />
              </View>
            )
          }
        </View>
        <View>
          <ListRow
            title="动态"
            accessory='indicator'
            icon={require('../assets/image/b3.png')}
          />
          <ListRow
            title="动态"
            accessory='indicator'
            icon={require('../assets/image/b3.png')}
            bottomSeparator="none"
            detail={
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <View
                  style={{
                    backgroundColor:"#EB4545",
                    height:12,
                    borderRadius:2,
                    paddingHorizontal:6,
                    marginRight:4,
                    justifyContent:"center"
                  }}
                >
                  <Text style={{
                    fontSize:8,
                    color:"#fff",
                  }}>四周年特供</Text>
                </View>
                <Text>喂狗粮</Text>
              </View>
            }
          />
        </View>
        <View
          style={{marginTop:6}}
        >
          {
            this.state.rows.map((e,i)=>{
              return (
                <ListRow
                  key={i}
                  title={e.title}
                  accessory='indicator'
                  icon={e.icon}
                  detail={e.detail}
                  topSeparator="none"
                />
              )
            })
          }
        </View>
        {
          this.state.login
          ?
          (
            <View style={{alignItems:"center",backgroundColor:"#fff",paddingVertical:20}}>
              <Button
                type="primary"
                title="退出登录"
                onPress={()=>{
                  this._removeData("userName");
                  this.setState({
                    login:null
                  })
                }}
              />
            </View>
          )
          :
          (
            <View></View>
          )
        }
      </ScrollView>
    );
  }  
}


const styles = StyleSheet.create({
  searchBtn:{
    paddingRight:10,
  },
  bg:{
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:280,
  },
  bgContent:{
    width:"100%",
    height:280,
  },
  setPage:{
    flexDirection:"column",
    alignItems:"flex-end",
    position:"absolute",
    top:46,
    right:0,
  },
  setBox:{
    width:21,
    height:20,
    backgroundColor:"rgba(0, 0, 0, 0.2)",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:2,
    marginRight:15,
    marginBottom:45,
  },
  zone:{
    borderWidth:1,
    borderColor:"rgba(255,255,255,0.7)",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:30,
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    paddingLeft:14,
    paddingRight:10,
    borderRightWidth:0,
    backgroundColor:"rgba(0,0,0,0.4)"
  },
  zoneText:{
    fontSize:14,
    fontWeight:"bold",
    color:'#fff',
    marginRight:6
  },
  
  userInfo:{
    position:"absolute",
    left:15,
    bottom:10,
  },
  head:{
    width:60,
    height:60,
    borderRadius:30,
    borderColor:'#FFFFFF',
    borderWidth:1
  },
  userName:{
    flexDirection:"row",
    marginTop:10,
    alignItems:"center",
    marginBottom:6
  },
  name:{
    fontSize:16,
    color:"#FFFFFF",
  },
  sex:{
    width:16,
    height:16,
    borderRadius:8,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10
  },
  autograph:{
    marginTop:6,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  txts:{
    flexDirection:"row",
    marginTop:8
  },
  txt:{
    flexDirection:"row",
    marginRight:20,
    alignItems:"center"
  },
  iconMargin:{
    marginRight:10
  }
})
