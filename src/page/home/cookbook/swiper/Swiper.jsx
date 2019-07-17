import React from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

export default class Swiper extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </Carousel>
      </WingBlank>
    );
  }
}
