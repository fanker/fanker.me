import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import BlogLayout from "../components/blogLayout";

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   }
// }

const Index = () => {
  return <BlogLayout>
    <div class="newsbox">
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>个人博客日记</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计思维</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>结构设计</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计素材</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计教程</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section><section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section><section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section><section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section><section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section><section>
        <div class="news">
          <h2 class="newstitle"><span><a href="/">更多</a></span><b>设计心得</b></h2>
          <ul>
            <li><a href="/"><span>08-30</span>如何快速建立自己的个人博客网站</a></li>
            <li><a href="/"><span>08-30</span>个人博客，属于我的小世界！</a></li>
            <li><a href="/"><span>08-30</span>网易博客关闭，何不从此开始潇洒行走江湖！</a></li>
            <li><a href="/"><span>08-30</span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a></li>
            <li><a href="/"><span>08-30</span>帝国cms 循环调用子栏目信息以及头条图片</a></li>
            <li><a href="/"><span>08-30</span>我是怎么评价自己的？</a></li>
            <li><a href="/"><span>08-30</span>html5 个人博客模板《蓝色畅想》</a></li>
            <li><a href="/"><span>08-30</span>【匆匆那些年】总结个人博客经历的这四年</a></li>
          </ul>
        </div>
      </section>
      <div class="clear"></div>
    </div>
  </BlogLayout>
}

export default Index;