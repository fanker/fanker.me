import React, { Component } from 'react';
import {
  Form, Input, Button, notification,
} from 'antd';

import { UserServer } from '../server';

const { TextArea } = Input;

class UserInfo extends Component {
  async componentDidMount() {
    const result = await UserServer.GetUserInfo();
    if (result && result.result === 0 && result.data.length > 0) {
      this.props.form.setFieldsValue({
        introduce: result.data[0].introduce,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll({ first: true }, async (error, values) => {
      if (!error) {
        const { introduce } = values;
        const submitResult = await UserServer.SaveUserInfo({ introduce });
        if (submitResult && submitResult.result === 0) {
          notification.success({ message: '保存成功' });
        } else {
          notification.error({ message: '保存失败, 请稍后重试！' });
        }
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="demo-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="个人简介">
            {getFieldDecorator('introduce', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                message: '请输入个人简介',
              }],
            })(
              <TextArea autosize={{ minRows: 6 }} placeholder="请输入个人简介" />,
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

export default Form.create()(UserInfo);
