import React, { Component } from 'react';
import { Layout, Empty } from 'antd';

import { LeftMenu, Header, Footer } from './layout/index';

import ArticleForm from './articleForm';
import TagList from './tagList';
import ArticleList from './articleList';
import UserInfo from './userInfo';

import { LoginServer } from '../server';

import '../../public/css/style.css';

const { Content, Sider } = Layout;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuKey: props.match.params[0] || 'edit',
    };
  }

  // 检测是否登录
  async componentWillMount() {
    const result = await LoginServer.checkLogin();
    if (result.result !== 0) {
      this.props.history.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ menuKey: nextProps.match.params[0] || 'edit' });
  }

  getContent = () => {
    const { menuKey } = this.state;
    switch (menuKey) {
      case 'edit':
        return <ArticleForm />;
      case 'tag':
        return <TagList />;
      case 'article':
        return <ArticleList />;
      case 'user':
        return <UserInfo />;
      default:
        return <Empty />;
    }
  }

  render() {
    const { menuKey } = this.state;
    return (
      <Layout>
        <Header history={this.props.history} />
        <Layout style={{ marginTop: 60 }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            style={{
              height: '100vh', position: 'fixed', left: 0, background: '#fff', borderRight: '1px solid #d1d1d1',
            }}
          >
            <LeftMenu defaultSelectedKeys={[menuKey]} />
          </Sider>
          <Layout style={{ marginLeft: 200, background: '#fff' }}>
            <Content style={{ margin: '5px 16px 0', minHeight: '800px' }}>
              {this.getContent()}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
