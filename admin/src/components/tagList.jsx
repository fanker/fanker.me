import React, { Component } from 'react';
import {
  Icon, Card, Popconfirm, Input,
} from 'antd';

import { TagServer } from '../server';

class TagList extends Component {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
  };

  async componentDidMount() {
    const list = await TagServer.GetTagList();
    if (list && list.result === 0 && list.data.length > 0) {
      this.setState({ tags: list.data });
    }
  }

  delConfirm = async (removedTagId) => {
    if (removedTagId > 0) {
      const delResult = await TagServer.DelTag(removedTagId);
      if (delResult && delResult.result === 0) {
        let { tags } = this.state;
        tags = tags.filter(tag => tag.id !== removedTagId);
        this.setState({ tags });
      }
    }
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = async () => {
    const { inputValue } = this.state;
    if (inputValue) {
      const addResult = await TagServer.AddTag(inputValue);
      if (addResult.result === 0) {
        let { tags } = this.state;
        tags = [...tags, ...addResult.data];
        this.setState({ tags });
      }
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <Card title="标签列表">
        {tags.map((tag) => {
          const { id, tag_name } = tag;
          return (
            <Card.Grid key={id} className="tag-list">
              {tag_name}
              <Popconfirm
                title="确定删除该标签吗?"
                onConfirm={() => this.delConfirm(id)}
                okText="确定"
                cancelText="取消"
              >
                <Icon className="close" type="close" />
              </Popconfirm>
            </Card.Grid>
          );
        })}
        <Card.Grid className="tag-list" onClick={this.showInput}>
          {inputVisible ? (
            <Input
              ref={input => this.input = input}
              type="text"
              size="small"
              style={{ width: '100%' }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          ) : <Icon type="plus" />
          }
        </Card.Grid>
      </Card>
    );
  }
}

export default TagList;
