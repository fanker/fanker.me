import React from 'react';
import {
  Form, Input, Button, DatePicker, Select, notification,
} from 'antd';

import BraftEditor from './editor/brafteditor';
import ArticleTypeList from './config/articletype';

import { TagServer, ArticleServer } from '../server';

const { Option } = Select;

class ArticleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
      tagList: [],
      isMounted: true,
    };
  }

  async componentDidMount() {
    const result = await TagServer.GetTagList();
    const { isMounted } = this.state;
    if (result && result.result === 0 && this.state.isMounted) {
      this.setState({ tagList: result.data });
    }
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll({ first: true }, async (error, values) => {
      if (!error) {
        const {
          title, type, tags, pubtime, content,
        } = values;
        const submitData = {
          title,
          type,
          tags: JSON.stringify(tags),
          pub_time: pubtime.format('YYYY-MM-DD'),
          introduce: `${content.toHTML().replace(/<\/?.+?\/?>/g, '').substr(0, 50)}...`,
          content: content.toHTML(),
        };
        const submitResult = await ArticleServer.SaveArticle(submitData);
        if (submitResult && submitResult.result === 0) {
          notification.success({ message: '保存成功' });
        } else {
          notification.error({ message: '保存失败, 请稍后重试！' });
        }
      }
    });
  }

  onContentChange = () => {
    const { form } = this.props;
    if (form.getFieldValue('content')) {
      this.setState({ content: form.getFieldValue('content') });
    }
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { content, tagList } = this.state;
    return (
      <div className="demo-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="文章标题">
            {getFieldDecorator('title', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                message: '请输入标题',
              }],
            })(
              <Input size="large" maxLength={30} placeholder="请输入标题" />,
            )}
          </Form.Item>
          <Form.Item label="分类">
            {getFieldDecorator('type', {
              initialValue: '1',
            })(
              <Select style={{ width: '35%' }}>
                {Object.keys(ArticleTypeList).map(key => <Option key={key} value={key}>{ArticleTypeList[key]}</Option>)}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="标签">
            {getFieldDecorator('tags', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                message: '请选择标签',
              }],
            })(
              <Select
                mode="multiple"
                placeholder="请选择标签"
                style={{ width: '35%' }}
              >
                {tagList.map(tag => <Option key={tag.id}>{tag.tag_name}</Option>)}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="发布时间">
            {getFieldDecorator('pubtime', {
              rules: [{ type: 'object', required: true, message: '请选择发布时间' }],
            })(
              <DatePicker format="YYYY-MM-DD" placeholder="请选择发布时间" />,
            )}
          </Form.Item>
          <Form.Item label="文章正文">
            {getFieldDecorator('content', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
                    callback('请输入正文内容');
                  } else {
                    callback();
                  }
                },
              }],
            })(
              <BraftEditor content={content} onChange={this.onContentChange} />,
            )}
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(ArticleForm);
