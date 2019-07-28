import React, { Component } from 'react';
import Editor from 'for-editor';

class MEditor extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <Editor value={value} onChange={this.onChange} onSave={this.onSave} />;
  }
}
export default MEditor;
