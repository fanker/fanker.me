import TagModel from '../models/tagModel.mjs';
/**
 * tag业务层接口
 */
class UserService {
  /**
   * 查询标签列表
   */
  static async getTagList() {
    const resultData = await TagModel.getTagList();
    return resultData;
  }

  static async addTag(tagInfo) {
    const resultData = await TagModel.addTag(tagInfo);
    return resultData;
  }

  static async delTag(tagId) {
    const resultData = await TagModel.delTag(tagId);
    return resultData;
  }
}
export default UserService;
