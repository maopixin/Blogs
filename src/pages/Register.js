import React from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import LoginSide from '../components/LoginSlide'
import {Button,Toast} from 'teaset'
const { width, height } = Dimensions.get('window');
export default class Register extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible:false
  };
  state = {
    bgColor:"#1b9fe2",
    title:"注册",
    userName:"",
    passWord:""
  }
  _storeData = async (key,val,err) => {
    try {
      await AsyncStorage.setItem(key,val);
    } catch (error) {
      err&&err(error)
    }
  }
  Register(){
    const {userName,passWord} = this.state
    if(userName==""){
      Toast.sad('您还没有输入账号');
      return false;
    }else if(passWord==""){
      Toast.sad('您还没有输入密码');
      return false;
    }
    this._storeData("USERS",JSON.stringify({userName,passWord})).then((d)=>{
      Toast.success('注册成功');
      setTimeout(()=>{
        this.props.navigation.goBack()
      },500)
    })
  }
  render() {
    const {userName,passWord,title} = this.state
    return (
      <View style={styles.page}>
        <LoginSide
          title={title}
          onLeftPress={()=>{this.props.navigation.goBack()}}
          leftImg={<Icon name="left" size={20} color="#303133"/>}
        />
        <View style={styles.loginPage}>
          <TextInput 
            style={[styles.input,{borderBottomColor:"#F2F6FC",borderBottomWidth:1}]}
            placeholder="账号"
            value={userName}
            onChangeText={(text)=>{
              this.setState({
                userName:text
              })
            }}
            underlineColorAndroid='transparent'
            maxLength={20}
          />
          <TextInput 
            style={styles.input} placeholder="密码"
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            value={passWord}
            onChangeText={(text)=>{
              this.setState({
                passWord:text
              })
            }}
            maxLength={16}
          />
          <Button 
            type="secondary"
            title="注   册"
            style={styles.button}
            onPress={this.Register.bind(this)}
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