import React from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LoginSide from '../components/LoginSlide'
import {Button,Toast} from 'teaset'
const { width } = Dimensions.get('window');
export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible:false
  };
  state = {
    bgColor:"#1b9fe2",
    title:"登录",
    userName:"",
    passWord:""
  }
  login = () => {
    const {userName,passWord} = this.state;
    if(userName==""){
      Toast.message('未填写账号');
      return false;
    };
    if(passWord==""){
      Toast.message('未填写密码');
      return false;
    }
    AsyncStorage.multiSet([["userName",userName],["passWord",passWord]],(error)=>{
      if(error){
        Toast.message('登录失败');
      }else{
        Toast.message('登录成功');
        this.props.navigation.navigate("My");
      }
    })
  }
  render() {
    const {bgColor,title,userName,passWord} = this.state
    return (
      <View style={styles.page}>
        <LoginSide
          title={title}
          onLeftPress={()=>{this.props.navigation.navigate("My")}}
          leftImg={<Icon name="down" size={20} color="#303133"/>}
          onRightPress={()=>{this.props.navigation.navigate("Register")}}
          rightImg={<Text>注册</Text>}
        />
        <View style={styles.loginPage}>
          <TextInput 
            style={[styles.input,{borderBottomColor:"#F2F6FC",borderBottomWidth:1}]}
            placeholder="账号/手机号/邮箱"
            underlineColorAndroid='transparent'
            maxLength={20}
            value={userName}
            onChangeText={(text)=>{
              this.setState({
                userName:text
              })
            }}
          />
          <TextInput 
            style={styles.input} placeholder="密码"
            underlineColorAndroid='transparent'
            maxLength={16}
            secureTextEntry={true}
            value={passWord}
            onChangeText={(text)=>{
              this.setState({
                passWord:text
              })
            }}
          />
          <Button 
            type="secondary"
            title="登   录"
            style={styles.button}
            onPress={this.login}
          />
        </View>

      </View>
      
    )
  }
}


const styles = StyleSheet.create({
  page:{
    flex:1,
    paddingTop:16,
  },
  loginPage:{
    flex:1,
    backgroundColor:"#F2F6FC",
    paddingTop:10,
    alignItems:"center"
  },
  input:{
    width:width,
    height:40,
    backgroundColor:"#fff",
    padding:0,
    margin:0,
    paddingHorizontal:15
  },
  button:{
    width:width-100,
    height:40,
    backgroundColor:"#1b9fe2",
    marginTop:15
  }
})