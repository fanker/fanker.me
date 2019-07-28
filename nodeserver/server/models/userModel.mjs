import { query, updateData } from '../utils/dbutils.mjs';
/**
 * user数据层接口
 */
class UserModel {
  /**
   * 根据用户名和密码查询用户是否存在
   * @param {object} options [用户登录信息, {username: '', password: ''}]
   */
  static async getOneByUserNameAndPassword(options) {
    const { username, password } = options;
    const sql = 'select * from tb_user where username = ? and password = ? limit 1';
    let result = await query(sql, [username, password]);
    if (Array.isArray(result) && result.length > 0) {
      [result] = result;
    } else {
      result = null;
    }
    return result;
  }

  static async getUserInfo(userId) {
    const sql = 'select introduce from tb_user where id = ?';
    const result = await query(sql, [userId]);
    if (Array.isArray(result) && result.length > 0) {
      return result;
    }
    return [];
  }

  static async updateUserInfo(userInfo, userId) {
    const result = await updateData('tb_user', userInfo, userId);
    return result;
  }
}
export default UserModel;
