import ArticleService from '../services/articleService.mjs';

class ArticleController {
  static async getArticleList(ctx) {
    const { start, end } = ctx.query;
    const list = await ArticleService.getArticleList(Number(start), Number(end));
    const result = {
      result: 0,
      resultStr: '',
      data: list,
    };
    ctx.body = result;
  }

  static async saveArticle(ctx) {
    const formData = ctx.request.body;
    const resultData = await ArticleService.saveArticle(formData);
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (resultData && resultData.insertId * 1 > 0) {
      result.resultStr = 'success';
    } else {
      result.result = 1;
      result.resultStr = '添加失败';
    }
    ctx.body = result;
  }

  static async delTag(ctx) {
    const formData = ctx.request.body;
    const { tagId } = formData;
    const resultData = await ArticleService.delTag(tagId);
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (resultData && resultData.affectedRows * 1 > 0) {
      result.resultStr = 'success';
    } else {
      result.result = 1;
      result.resultStr = '删除失败';
    }
    ctx.body = result;
  }
}
export default ArticleController;
