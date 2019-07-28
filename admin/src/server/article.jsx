/**
 * 文章相关server请求接口
 */
import axios from 'axios';

const SaveArticle = articleInfo => new Promise(async (resolve, reject) => {
  const result = await axios.post('/api/article/saveArticle', articleInfo);
  resolve(result.data);
});

const GetArticleList = (start, end) => new Promise(async (resolve, reject) => {
  const result = await axios.get(`/api/article/getArticleList?start=${start}&end=${end}`);
  resolve(result.data);
});

const GetArticleById = (id) => {

};

export default {
  SaveArticle,
  GetArticleList,
  GetArticleById,
};
