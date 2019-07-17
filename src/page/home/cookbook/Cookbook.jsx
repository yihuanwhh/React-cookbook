import React, { Component,Fragment } from 'react'
import Header from './header/Header'
import Swiper from './swiper/Swiper'

export default class Cookbook extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Swiper></Swiper>
      </Fragment>
      
    )
  }
}
