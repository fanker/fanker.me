import { createHash } from 'crypto';

import UserService from '../services/userService.mjs';

/**
 * user控制器
 */
class UserController {
  static hasLogin(ctx) {
    return ctx.session && ctx.session.isLogin;
  }

  // 获取用户个人信息
  static async getUserInfo(ctx) {
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (UserController.hasLogin(ctx)) {
      const userResult = await UserService.getUserInfo(ctx.session.userId);
      if (userResult) {
        result.data = userResult;
      } else {
        result.result = 2;
        result.resultStr = '系统错误';
      }
    } else {
      result.result = 1;
      result.resultStr = '登录态失效，请重新登录';
    }
    ctx.body = result;
  }

  static async saveUserInfo(ctx) {
    const formData = ctx.request.body;
    const { introduce } = formData;

    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (UserController.hasLogin(ctx)) {
      const resultData = await UserService.updateUserInfo({ introduce }, ctx.session.userId);
      if (resultData && resultData.affectedRows * 1 > 0) {
        result.resultStr = 'success';
      } else {
        result.result = 1;
        result.resultStr = '保存失败';
      }
    } else {
      result.result = 1;
      result.resultStr = '登录态失效，请重新登录';
    }
    ctx.body = result;
  }

  /**
   * 判断登录态是否有效
   * @param ctx [上下文]
   */
  static checkLogin(ctx) {
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (!UserController.hasLogin(ctx)) {
      result.result = 1;
      result.resultStr = '登录态失效，请重新登录';
    }
    ctx.body = result;
  }

  /**
   * 用户登录校验
   * @param {object} ctx [上下文]
   */
  static async signIn(ctx) {
    const formData = ctx.request.body;
    const { username } = formData;
    let { password } = formData;

    const hash = createHash('md5');
    hash.update(password);
    password = hash.digest('hex');

    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };

    const userResult = await UserService.signIn({ username, password });
    if (userResult && username === userResult.username) {
      result.resultStr = 'success';
    } else {
      result.result = 1;
      result.resultStr = '用户名或密码错误';
    }

    if (result.result === 0) {
      const { session } = ctx;
      session.isLogin = true;
      session.username = userResult.username;
      session.userId = userResult.id;
    }
    ctx.body = result;
  }

  // 登出
  static async signOut(ctx) {
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    ctx.session = null;
    ctx.body = result;
  }
}

export default UserController;
