import React, { Component } from 'react'
import Root from './src/navigation/Root'
import { StatusBar ,Platform } from "react-native";
import {Provider} from "react-redux";
import store from './src/store'
const isAndroid = Platform.OS==="android"
export default class App extends Component {
  componentWillMount(){
    if(isAndroid){
      StatusBar.setBackgroundColor("transparent")
      StatusBar.setTranslucent(true)
      StatusBar.setBarStyle("dark-content")
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}
