import UserModel from '../models/userModel.mjs';
/**
 * user业务层接口
 */
class UserService {
  /**
   * 用户登录，用户名密码校验
   * @param {object} formData
   */
  static async signIn(formData) {
    const resultData = await UserModel.getOneByUserNameAndPassword(formData);
    return resultData;
  }

  static async getUserInfo(userId) {
    const resultData = await UserModel.getUserInfo(userId);
    return resultData;
  }

  static async updateUserInfo(userInfo, userId) {
    const resultData = await UserModel.updateUserInfo(userInfo, userId);
    return resultData;
  }
}
export default UserService;
