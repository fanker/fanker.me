import React from 'react';
import {
  Menu, Icon,
} from 'antd';

import { Link } from 'react-router-dom';

import LeftMenuConfig from '../config/leftmenu';

/**
 * 菜单列表
 * @param {object} props
 */
export default props => (
  <Menu {...props} theme="light" mode="inline">
    {LeftMenuConfig.map(menu => (
      <Menu.Item key={menu.path}>
        <Link to={`/${menu.path}`}>
          <Icon type={menu.type} />
          <span className="nav-text">{menu.text}</span>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);
