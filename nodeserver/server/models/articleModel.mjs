import {
  insertData, findDataByPage, deleteDataById,
} from '../utils/dbutils.mjs';
/**
 * article数据层接口
 */
class ArticleModel {
  /**
   * 查询文章列表
   */
  static async getArticleList(start, end) {
    const result = await findDataByPage('tb_article', ['id', 'title', 'type', 'tags', 'pub_time', 'introduce'], start, end);
    if (Array.isArray(result) && result.length > 0) {
      return result;
    }
    return [];
  }

  static async saveArticle(articleInfo) {
    const result = await insertData('tb_article', articleInfo);
    return result;
  }
}
export default ArticleModel;
