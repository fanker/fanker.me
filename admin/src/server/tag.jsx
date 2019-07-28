import axios from 'axios';

const GetTagList = () => new Promise(async (resolve, reject) => {
  const result = await axios.get('/api/tag/getTagList');
  resolve(result.data);
});

const AddTag = tagName => new Promise(async (resolve, reject) => {
  const result = await axios.post('/api/tag/addTag', { tagName });
  resolve(result.data);
});

const DelTag = tagId => new Promise(async (resolve, reject) => {
  const result = await axios.post('/api/tag/delTag', { tagId });
  resolve(result.data);
});

export default {
  GetTagList,
  AddTag,
  DelTag,
};
