import ArticleModel from '../models/articleModel.mjs';
/**
 * article业务层接口
 */
class ArticleService {
  /**
   * 查询文章列表
   */
  static async getArticleList(start, end) {
    const resultData = await ArticleModel.getArticleList(start, end);
    return resultData;
  }

  static async saveArticle(articleInfo) {
    const resultData = await ArticleModel.saveArticle(articleInfo);
    return resultData;
  }
}
export default ArticleService;
