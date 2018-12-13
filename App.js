import React, { Component } from 'react'
import Root from './src/navigation/Root'
import {Provider} from "react-redux";
import store from './src/store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}
