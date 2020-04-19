import axios from 'axios';

export const baseUrl = 'http://175.24.111.110:4000';

//axios 的实例及拦截器配置
const req = axios.create ({
  baseURL: baseUrl
});

req.interceptors.response.use (
  res => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export {
    req
};