import React from 'react'
import {View,Text} from 'react-native'
export default class BottomLine extends React.Component {
  render() {
    return (
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:10}}>
            <View style={{borderBottomColor:"#606266",borderBottomWidth:1,width:30}}></View>
            <Text style={{color:"#606266",marginHorizontal:14}}>我是有底线的</Text>
            <View style={{borderBottomColor:"#606266",borderBottomWidth:1,width:30}}></View>
        </View>
    )
  }
}
