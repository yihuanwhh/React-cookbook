import React, { Component,Fragment } from 'react'

import Header from './header/Header'
import Swiper from './swiper/Swiper'
import HotCategories from './hotcategories/views/HotCategories'
import Excellentfood from './excellent-food/Excellentfood'

import Search from '../../../compoments/search/Search'

export default class Cookbook extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Swiper></Swiper>
        <Search></Search>
        <HotCategories></HotCategories>
        {/* <Excellentfood></Excellentfood> */}
      </Fragment>    
    )
  }
}
