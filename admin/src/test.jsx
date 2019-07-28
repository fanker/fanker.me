import React, { Component } from 'react';
import { Layout } from 'antd';
import Editor from 'braft-editor';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      text: 'hello world!',
    };
  }

  render() {
    const { text } = this.state;
    return (
      <Layout>
        <Editor
          id="editor"
          placeholder={text}
          className="my-editor"
        />
      </Layout>
    );
  }
}

export default Test;
