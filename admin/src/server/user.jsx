import axios from 'axios';

const GetUserInfo = () => new Promise(async (resolve, reject) => {
  const result = await axios.get('/api/user/getUserInfo');
  resolve(result.data);
});

const SaveUserInfo = userinfo => new Promise(async (resolve, reject) => {
  const result = await axios.post('/api/user/saveUserInfo', userinfo);
  resolve(result.data);
});

export default {
  GetUserInfo,
  SaveUserInfo,
};
