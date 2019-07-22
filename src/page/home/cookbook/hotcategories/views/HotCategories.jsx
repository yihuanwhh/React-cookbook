import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import HotCategoriesUI from './HotCategoriesUI'

import { loadDataAsync } from '../actionCreator'

const mapState = state => {
  return {
    list : state.menulist.list,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(loadDataAsync())
    }
  }
}

class HotCategories extends Component {
  state = {
    list:[]
  }

  static getDerivedStateFromProps(nextProps,prevState) {
    if(nextProps.list.category) {
      return {
        list:[...nextProps.list.category['热门'].slice(0,11),{
          img:'',
          title:'更多...'
        } ]
      }
    }
    return null
  }
  
  render() {
    return (
      //添加点击item的事件
      <HotCategoriesUI onItemClick={this.handleItemClick.bind(this)} list={this.state.list}></HotCategoriesUI>
    )
  }
  //每一次完成加载就会调用props里的loadData方法加载数据
  componentDidMount() {
    this.props.loadData()
  }
  //点击事件路由跳转到相应的列表页
  handleItemClick() {
    console.log(1)
    this.props.history.push('/list',{id:0})
  }
}


export default connect(mapState,mapDispatch)(HotCategories)