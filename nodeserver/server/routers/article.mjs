/**
 * article信息路由
 */
import Router from 'koa-router';

import ArticleController from '../contollers/articleController.mjs';

const router = new Router();

const routers = router
  .get('/getArticleList', ArticleController.getArticleList)
  .post('/saveArticle', ArticleController.saveArticle)
  .post('/delTag', ArticleController.delTag);

export default routers;
