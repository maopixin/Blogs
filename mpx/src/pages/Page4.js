import React from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import { StackActions, NavigationActions } from 'react-navigation';
import {Toast} from 'teaset'

export default class Page4 extends React.Component {
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
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Page4</Text>
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
