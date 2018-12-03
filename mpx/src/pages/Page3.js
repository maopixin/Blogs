import React from 'react';
import { View, Text ,StyleSheet ,FlatList,Image,TouchableOpacity} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import {Toast} from 'teaset'

export default class Page3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      page:1,
      refreshing:true,
    }
  }

  componentWillMount(){
    this.getArticle()
  }

  getArticle = (page=this.state.page) => {
    
    fetch("https://blog.sozxw.com/api/article/?page="+page,{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log('请求了')
      this.setState({
        list:[...this.state.list,...responseJson],
        page:this.state.page++,
        refreshing:false
      })
    })
    .catch(error => {
      // console.error(error);
    });
  }

  onRefresh= () => {
    this.setState({
      refreshing:true,
      page:1
    });
    fetch("https://blog.sozxw.com/api/article/?page="+1,{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        list:responseJson,
        page:this.state.page++,
        refreshing:false
      });
      Toast.success("刷新成功");
    })
    .catch(error => {
      // console.error(error);
    });
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.content}>
        <FlatList
          // 渲染数据
          data={this.state.list}
          // create key fn
          keyExtractor={(item,index)=>item.id.toString()}

          renderItem={({item}) => (
            <TouchableOpacity 
              onPress={()=>{
                navigation.navigate('Details',{
                  id:item.id,
                  collection:true,
                  title:item.title
                })
              }}
            >
              <View 
                style={styles.item}
              >
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    style={styles.authorHead}
                    source={{uri: item.banner}}
                    resizeMode="cover"
                  />
                  <Text numberOfLines={3} style={styles.p}>{item.summary}</Text>
                  <View style={styles.bar}>
                    <View>
                      <Text style={styles.barText}>作者：李征</Text>
                    </View>
                    <View>
                      <Text style={styles.barText}>访问量：{item.click}</Text>
                    </View>
                    <View style={styles.author}>
                      <Anticon style={{marginRight:4,marginTop:2}} name={"like1"} size={14} color="#1b9fe2"/>
                      <Text style={styles.barText}>{item.awesome}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
          )}
          // 下拉刷新
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
          // 上拉加载
          // onEndReached={()=>{
          //   console.log('上拉了')
          //   this.getArticle()
          // }}
          // onEndReachedThreshold={0.3}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  content:{
    height: '100%',
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
    justifyContent: 'space-between',
    marginTop:6
  },
  author:{
    flexDirection: 'row',
    alignItems:"center",
    // justifyContent:"center"
  },
  authorHead:{
    height:200
  },
  barText:{
    lineHeight:20
  }
})
