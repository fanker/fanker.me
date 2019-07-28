import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Layout, Spin, Alert,
} from 'antd';

import { Redirect } from 'react-router-dom';

import { LoginServer } from '../server';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      hasLogin: false,
      loginErr: false,
      spinning: false,
    };
  }

  // 检测是否登录
  async componentWillMount() {
    const result = await LoginServer.checkLogin();
    if (result.result === 0) {
      this.setState({ hasLogin: true });
    }
  }

  onTipsClose = () => {
    this.setState({ loginErr: false });
  }

  onLoginSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.setState({ spinning: true }, async () => {
          const signInResult = await LoginServer.SignIn(values);
          if (signInResult && signInResult.result === 0) {
            this.setState({ hasLogin: true, loginErr: false, spinning: false });
          } else {
            this.setState({ loginErr: true, spinning: false });
          }
        });
      }
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { hasLogin, loginErr, spinning } = this.state;
    if (hasLogin) {
      return <Redirect to={{ pathname: '/' }} />;
    }
    return (
      <Layout>
        <Form onSubmit={e => this.onLoginSubmit(e, form)} className="login-form login-center">
          <Spin spinning={spinning} tip="登录中......">
            {loginErr && <Alert message="用户名或密码错误" type="error" showIcon banner closable onClose={this.onTipsClose} />}
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input allowClear prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input.Password allowClear prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="Password" placeholder="密码" />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Spin>
        </Form>
      </Layout>
    );
  }
}


export default Form.create()(Login);
