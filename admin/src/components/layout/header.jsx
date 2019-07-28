/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Layout, Menu, Dropdown, Icon, Avatar,
} from 'antd';

import { LoginServer } from '../../server';

const { Header, Content, Sider } = Layout;

// 登出
const onLoginOut = async (props) => {
  const signOutResult = await LoginServer.SignOut();
  if (signOutResult.result === 0) {
    props.history.push('/login');
  }
};

const menu = props => (
  <Menu>
    <Menu.Item onClick={() => onLoginOut(props)}>退出登录</Menu.Item>
  </Menu>
);

/**
 * 头部
 */
export default props => (
  <Header style={{
    position: 'fixed', zIndex: 99, width: '100%', background: '#fff', borderBottom: '1px solid #d1d1d1',
  }}
  >
    <Sider theme="light" style={{ float: 'left', height: '100%' }}><h2>后台管理系统</h2></Sider>
    <Content style={{ float: 'right' }}>
      <Dropdown overlay={() => menu(props)} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          <span>
            <Avatar icon="user" />
              fanker
          </span>
          <Icon type="down" />
        </a>
      </Dropdown>
    </Content>
  </Header>
);
