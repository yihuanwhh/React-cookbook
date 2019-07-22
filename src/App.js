import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/'

import Home from './page/home/Home'
import './assets/styles/reset.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    )
  }
}