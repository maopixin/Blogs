import React from 'react';
import { View, Text, Button ,StyleSheet ,FlatList,Image} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import { StackActions, NavigationActions } from 'react-navigation';
import {Toast} from 'teaset'

export default class Page3 extends React.Component {
  static navigationOptions = {
    title: '个人信息',
    // headerStyle: {
    //   // backgroundColor: '#f4511e',
    // },
    // headerTintColor: '#1b9fe2',
    // headerRight: (
    //   <View style={{paddingRight:20,}}>
    //     <Anticon name='search1' size={20} color="#1b9fe2"
    //       onPress={()=>{
    //         Toast.sad('搜索功能暂未开放');
    //       }}
    //     />
    //   </View>
    // ),
  };
  constructor(props){
    super(props);
    this.state = {
      list:[],
      page:1,
    }
  }
  componentWillMount = () => {
    fetch("https://blog.sozxw.com/api/article/?page=2",{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    }).then(response => response.json())
    .then(responseJson => {
      // alert(responseJson.length);
      this.setState({
        list:responseJson
      })
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => (
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Image
                  style={styles.authorHead}
                  source={{uri: item.banner}}
                />
                <Text numberOfLines={3} style={styles.p}>{item.summary}</Text>
                <View style={styles.bar}>
                  <View style={styles.author}>
                    <Text style={styles.barText}>作者：李征</Text>
                  </View>
                  <View>
                    <Text style={styles.barText}>访问量：{item.click}</Text>
                  </View>
                  <View>
                    <Anticon name={"heart"} size={20} color="#1b9fe2"/>
                  </View>
                </View>
              </View>
          )}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  content:{
    flex: 1, 
    paddingHorizontal:10,
    paddingVertical:6,
    backgroundColor:"#fff"
  },
  item:{
    backgroundColor:"#ffffff",
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:4,
    shadowColor: '#ccc',
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4, 
    elevation: 10 ,
    marginBottom:6,
  },
  searchBtn:{
    paddingRight:10,
  },
  title:{
    color:"#303133",
    fontSize:16,
    lineHeight:28
  },
  p:{
    color:"#606266",
    fontSize:14,
    lineHeight:20
  },
  bar:{
    flexDirection: 'row',
    fontSize:14,
    lineHeight:20,
    color:"#303133",
    justifyContent: 'space-between',
    marginTop:6
  },
  author:{
    flexDirection: 'row',
  },
  authorHead:{
    height:200
  },
  barText:{
    lineHeight:20
  }
})
