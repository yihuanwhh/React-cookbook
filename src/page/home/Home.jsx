import React from 'react'
import { TabBar } from 'antd-mobile'

import Cookbook from './cookbook/Cookbook'

import CookImage from '../../assets/images/cookbook.png'
import CookImageActive from '../../assets/images/cookbook-active.png'
import MenuImage from '../../assets/images/menu.png'
import MenuImageActive from '../../assets/images/menu-active.png'
import MoreImage from '../../assets/images/more.png'
import MoreImageActive from '../../assets/images/more-active.png'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${CookImage}) center center /  26px 26px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${CookImageActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={151}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Cookbook></Cookbook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${MenuImage}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${MenuImageActive}) center center /  21px 21px no-repeat`}}
              />
            }
            title="分类"
            key="menu"
            badge={'hot'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <div>menu</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${MoreImage}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${MoreImageActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="更多"
            key="more"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>more</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
