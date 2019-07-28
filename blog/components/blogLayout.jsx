import Header from "./layout/header";
import Aside from "./layout/aside";

import Head from 'next/head'

const BlogLayout = props => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
          <title>FANKER-ME</title>
          <meta name="keywords" content="前端开发,nodejs,JavaScript,全栈开发,php,python,web" />
          <meta name="description" content="fanker的个人博客" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/static/css/index.css" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        <Aside />
        <div className="main-content">
          {props.children}
          <div className="copyright">
            <p>Copyright 2019  Inc. AllRights Reserved. Design by <a href="http://fanker.me" target="__blank">fanker.me</a></p>
          </div>
        </div>
      </main>
      <a href="#" className="cd-top cd-is-visible">Top</a>
    </div>
  )
}
export default BlogLayout;