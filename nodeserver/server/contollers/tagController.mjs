import TagService from '../services/tagService.mjs';

class TagController {
  static async getTagList(ctx) {
    const list = await TagService.getTagList();
    const result = {
      result: 0,
      resultStr: '',
      data: list,
    };
    ctx.body = result;
  }

  static async addTag(ctx) {
    const formData = ctx.request.body;
    const { tagName } = formData;

    const resultData = await TagService.addTag({ tag_name: tagName });
    const result = {
      result: 0,
      resultStr: '',
      data: null,
    };
    if (resultData && resultData.insertId * 1 > 0) {
      result.resultStr = 'success';
      result.data = [{
        id: resultData.insertId * 1,
        tag_name: tagName,
      }];
    } else {
      result.result = 1;
      result.resultStr = '添加失败';
    }
    ctx.body = result;
  }

  static async delTag(ctx) {
    const formData = ctx.request.body;
    const { tagId } = formData;
    const resultData = await TagService.delTag(tagId);
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
export default TagController;
