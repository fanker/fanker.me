import { selectData, insertData, deleteDataById } from '../utils/dbutils.mjs';
/**
 * tag数据层接口
 */
class TagModel {
  /**
   * 查询标签列表
   */
  static async getTagList() {
    const result = await selectData('tb_tags', ['id', 'tag_name']);
    if (Array.isArray(result) && result.length > 0) {
      return result;
    }
    return [];
  }

  static async addTag(tagInfo) {
    const result = await insertData('tb_tags', tagInfo);
    return result;
  }

  static async delTag(tagId) {
    const result = await deleteDataById('tb_tags', tagId);
    return result;
  }
}
export default TagModel;
