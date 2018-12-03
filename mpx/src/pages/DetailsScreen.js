import React from 'react';
import { View, Text,WebView,ActivityIndicator } from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import Entypoicon from 'react-native-vector-icons/Entypo'
import {Toast} from 'teaset'

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation})=>{
        return {
            title: navigation.getParam('title'),
            // headerTintColor: '#1b9fe2',
            headerRight: (
                <View style={{paddingRight:20,flex:1,flexDirection: 'row'}}>
                    <Entypoicon style={{paddingRight:10}} name={'share'} size={20} color="#1b9fe2"
                        onPress={navigation.getParam('handleShare')}
                    />
                    <Anticon 
                        name={'like1'}
                        size={20}
                        color="#1b9fe2"
                        onPress={navigation.getParam('handleCollection')}
                    />
                </View>
            ),
        }
    };
    state = {
        collection: this.props.navigation.getParam('collection'),
    };
    componentDidMount() {
        this.props.navigation.setParams({ 
            handleCollection: this.handleCollection,
            handleShare: this.handleShare
        });
    }

    handleCollection = () => {
        this.props.navigation.setParams({ collection: !this.state.collection });
        this.setState({
            collection:!this.state.collection
        })
    }
    handleShare = () => {
        Toast.sad('分享功能暂未开放');
    }
    render() {
        const { navigation } = this.props;
        // 第一个参数是属性名 第二个是默认自 如果获取的参数不存在 会返回第二个参数
        const id = navigation.getParam('id')
        return (
            <View style={{width:"100%",height:"100%"}}>
                <WebView 
                    source={{uri:'https://blog.sozxw.com/mobile/a/'+id}}
                    style={{width:'100%',height:'100%'}}
                    renderLoading={()=><ActivityIndicator style={{marginTop:20}} size="large" color="#1b9fe2"/>}
                    startInLoadingState={true}
                    injectedJavaScript={"document.getElementById('footer').style.display='none'"}
                    scalesPageToFit={false}
                />
            </View>
        );
    }  
}