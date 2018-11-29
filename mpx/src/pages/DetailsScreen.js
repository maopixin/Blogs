import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; 
import Anticon from 'react-native-vector-icons/AntDesign'
import Entypoicon from 'react-native-vector-icons/Entypo'
import {Toast} from 'teaset'

export default class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation})=>{
        return {
            title: '详情页',
            // headerTintColor: '#1b9fe2',
            headerRight: (
                <View style={{paddingRight:20,flex:1,flexDirection: 'row'}}>
                    <Entypoicon style={{paddingRight:10}} name={'share'} size={20} color="#1b9fe2"
                        onPress={navigation.getParam('handleShare')}
                    />
                    <Anticon name={navigation.getParam('collection')?'heart':'hearto'} size={20} color="#1b9fe2"
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
        const name = navigation.getParam('name','no-name')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>{name}</Text>
                <Text>{this.state.count}</Text>
                <Button 
                    title="收藏"
                    // onPress={navigation.setParams({collection:!this.state.collection})}
                />
            </View>
        );
    }  
}