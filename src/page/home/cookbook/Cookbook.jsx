import React, { Component,Fragment } from 'react'

import Header from './header/Header'
import Swiper from './swiper/Swiper'
import HotCategories from './hotcategories/HotCategories'

import Search from '../../../compoments/search/Search'

export default class Cookbook extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCategories></HotCategories>
      </Fragment>    
    )
  }
}
