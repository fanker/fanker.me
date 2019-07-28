/**
 * 个人信息路由
 */
import Router from 'koa-router';

import UserController from '../contollers/userController.mjs';

const router = new Router();

const routers = router
  .get('/getUserInfo', UserController.getUserInfo)
  .post('/saveUserInfo', UserController.saveUserInfo)
  .get('/checkLogin', UserController.checkLogin)
  .get('/signOut', UserController.signOut)
  .post('/signIn', UserController.signIn);

export default routers;
