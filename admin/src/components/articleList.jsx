import React, { Component } from 'react';
import {
  List, Button, Skeleton, notification, Empty,
} from 'antd';

import { ArticleServer } from '../server';

class ArticleList extends Component {
  state = {
    initLoading: true,
    loading: false,
    list: [],
    pageno: 1,
    pagesize: 10,
  };

  async componentDidMount() {
    const { pageno, pagesize } = this.state;
    const result = await ArticleServer.GetArticleList((pageno - 1) * pagesize, pageno * pagesize);
    if (result && result.result === 0) {
      this.setState({
        initLoading: false,
        list: result.data,
      });
    }
  }

  openNotificationWithIcon = (type, message) => {
    notification[type]({
      message,
    });
  };

  onLoadMore = async () => {
    this.setState({
      loading: true,
    });
    const { pageno, pagesize, list } = this.state;
    const result = await ArticleServer.GetArticleList(pageno * pagesize, (pageno + 1) * pagesize);
    if (result && result.result === 0) {
      if (result.data.length > 0) {
        this.setState({
          list: [...list, ...result.data],
          pageno: pageno + 1,
          loading: false,
        });
      } else {
        this.openNotificationWithIcon('info', '没有更多了');
      }
    } else {
      this.openNotificationWithIcon('error', '获取更多数据失败，请稍后重试！');
    }
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={this.onLoadMore}>loading more</Button>
      </div>
    ) : null;
    if (list.length > 0) {
      return (
        <List
          loading={initLoading}
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item actions={[<a>编辑</a>, <a>删除</a>]}>
              <Skeleton title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<a href={`/page/${item.id}`} rel="noopener noreferrer" target="_blank">{item.title}</a>}
                  description={item.introduce}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      );
    }
    return <Empty />;
  }
}

export default ArticleList;
