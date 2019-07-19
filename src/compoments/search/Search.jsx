import React, { Component } from 'react'

import {SearchContainer,InputContainer} from './StyledSearch'

import SearchIcon from '../../assets/images/search.png'

export default class Search extends Component {
  render() {
    return (
      <SearchContainer>
        <InputContainer>
          <img src={SearchIcon} alt=""></img>
          <span>想吃什么搜这里</span>
        </InputContainer>
      </SearchContainer>
    )
  }
}
