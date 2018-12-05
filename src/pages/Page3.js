import React from 'react';
import { View, Text ,StyleSheet ,FlatList,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import {Toast} from 'teaset'
import BottomLine from '../components/BottomLine'
import BottomLoading from '../components/BottomLoading'

export default class Page3 extends React.Component {
  constructor(props){
    super(props);
    this.page = 1;
    this.total = 1;
    this._isMounted = false;
    this.state = {
      list:[],
      refreshing:false,
      isLoading:false
    }
  }

  componentWillMount(){
    this._isMounted = true;
    this.getArticle()
  }

  getArticle = () => {
    this.setState({
      isLoading:true
    })
    fetch("https://blog.sozxw.com/api/article/?page="+this.page,{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      this.page ++;
      this.total = 17;
      this.setState({
        list:[...this.state.list,...responseJson],
        isLoading:false
      })
    })
    .catch(error => {
      this.setState({
        isLoading: false
      })
      // console.error(error);
    });
  }

  onRefresh= () => {
    this.page = 1;
    this.setState({
      refreshing:true
    });
    fetch("https://blog.sozxw.com/api/article/?page="+this.page,{
      method:"GET",
      mode:"cors",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      this.page++ ;
      this.setState({
        list:responseJson,
        refreshing:false
      });
      Toast.success("刷新成功");
    })
    .catch(error => {
      // console.error(error);
    });
  }
  _hasMore = () => {
		return this.state.list.length < this.total && this.total > 0
	};

  _renderFooter = () => {
    if(this._hasMore()){
      return (
        <BottomLoading/>
      )
    }else{
      return (
        <BottomLine/>
      )
    }
  }

  _loadMore = () => {
    if (this._hasMore() && !this.state.isLoading) {
			this.getArticle()
		}
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
          // initialNumToRender = {2}
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
          ListFooterComponent={this._renderFooter}
          onEndReached={this._loadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  content:{
    height: '100%',
    backgroundColor:"#EBEEF5",
  },
  item:{
    backgroundColor:"#ffffff",
    borderRadius:4,
    marginHorizontal:4,
    paddingHorizontal:10,
    shadowColor: '#ccc',
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 4, 
    elevation: 2 ,
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
