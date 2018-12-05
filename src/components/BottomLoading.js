import React from 'react'
import {View,Text,ActivityIndicator} from 'react-native'
export default class BottomLoading extends React.Component {
  render() {
    let {text="正在加载",siez="small",color="#1b9fe2"} = this.props;
    return (
        <View
            style={{alignItems:"center",paddingVertical:10}}
        >
            <ActivityIndicator
                size="small"
                color="#1b9fe2"
                style={{marginBottom:6}}
            />
            <Text>{ text }</Text>
        </View>
    )
  }
}
