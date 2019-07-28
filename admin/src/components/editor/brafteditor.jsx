/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import 'braft-editor/dist/index.css';
// import 'braft-extensions/dist/code-highlighter.css';
// import 'braft-extensions/dist/color-picker.css';
import 'braft-editor/dist/output.css';

import React, { Component } from 'react';
import Editor from 'braft-editor';
// import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
// import ColorPicker from 'braft-extensions/dist/color-picker';

// Editor.use(CodeHighlighter({
//   includeEditors: ['editor-with-code-highlighter'],
// }));

// 取色器
// Editor.use(ColorPicker({
//   includeEditors: ['editor'],
//   theme: 'light',
// }));

/**
 * 初始化braft-editor组件
 */
class BraftEditor extends Component {
  preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close();
    }
    window.previewWindow = window.open();
    window.previewWindow.document.write(this.buildPreviewHtml());
    window.previewWindow.document.close();
  }

  buildPreviewHtml = () => {
    const { content } = this.props;
    if (content) {
      return `<!Doctype html>
        <html>
          <head>
            <title>Preview Content</title>
            <style>
              html,body{
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: auto;
                background-color: #f1f2f3;
              }
              .container{
                box-sizing: border-box;
                width: 1000px;
                max-width: 100%;
                min-height: 100%;
                margin: 0 auto;
                padding: 30px 20px;
                overflow: hidden;
                background-color: #fff;
                border-right: solid 1px #eee;
                border-left: solid 1px #eee;
              }
              .container img,
              .container audio,
              .container video{
                max-width: 100%;
                height: auto;
              }
              .container p{
                white-space: pre-wrap;
                min-height: 1em;
              }
              .container pre{
                padding: 15px;
                background-color: #f1f1f1;
                border-radius: 5px;
              }
              .container blockquote{
                margin: 0;
                padding: 15px;
                background-color: #f1f1f1;
                border-left: 3px solid #d1d1d1;
              }
            </style>
          </head>
          <body>
            <div class="container">${content.toHTML()}</div>
          </body>
        </html>`;
    }
    return '';
  }

  render() {
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview,
      },
    ];
    return (
      <Editor
        {...this.props}
        id="editor"
        placeholder="请输入正文内容"
        className="my-editor"
        extendControls={extendControls}
      />
    );
  }
}

export default BraftEditor;
