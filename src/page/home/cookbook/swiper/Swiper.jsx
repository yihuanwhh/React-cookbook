import React from 'react'

import { Carousel } from 'antd-mobile'
import Swiper1 from '../../../../assets/images/swiper-1.png'
import Swiper2 from '../../../../assets/images/swiper-2.jpeg'
import Swiper3 from '../../../../assets/images/swiper-3.jpeg'

export default class Swiper extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  render() {
    return (
      <Carousel
        autoplay={true}
        infinite
      >
        <img src={Swiper1} alt=""/>
        <img src={Swiper2} alt=""/>
        <img src={Swiper3} alt=""/>
      </Carousel>
    );
  }
}
