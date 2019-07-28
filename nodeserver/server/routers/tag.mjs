/**
 * 标签信息路由
 */
import Router from 'koa-router';

import TagController from '../contollers/tagController.mjs';

const router = new Router();

const routers = router
  .get('/getTagList', TagController.getTagList)
  .post('/addTag', TagController.addTag)
  .post('/delTag', TagController.delTag);
  // .get('/checkLogin', TagController.checkLogin)
  // .get('/signOut', TagController.signOut)

export default routers;
