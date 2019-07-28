/**
 * 登录相关server请求接口
 */
import axios from 'axios';
/**
 * 检测账号密码
 * @param {object} userinfo  用户输入的账号密码，例如:{username: 111, password: 222}
 */
const CheckUser = userinfo => new Promise(async (resolve, reject) => {
  const result = await axios.post('/api/user/signIn', userinfo);
  resolve(result.data);
});

/**
 * 用户登录
 * @param {object} userinfo  用户输入的账号密码，例如:{username: 111, password: 222}
 */
const SignIn = async (userinfo) => {
  const result = await CheckUser(userinfo);
  return result;
};

/**
 * 退出登录
 */
const SignOut = () => new Promise(async (resolve, reject) => {
  const result = await axios.get('/api/user/signOut');
  resolve(result.data);
});

/**
 * 登录态检测
 */
const checkLogin = () => new Promise(async (resolve, reject) => {
  const result = await axios.get('/api/user/checkLogin');
  resolve(result.data);
});

export default {
  SignIn,
  SignOut,
  checkLogin,
};
