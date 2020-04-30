import { req } from "./config";

export const getBannerRequest = () => {
  return req.get ('/banner');
}

export const getRecommendListRequest = () => {
  return req.get ('/personalized');
}
export const getHotSingerListRequest = (count) => {
  return req.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (singer,where,type,page) => {
  return req.get(`/artist/list?type=${singer}&area=${where}&initial=${type}&offset=${page}`);
}

export const getRankListRequest = () => {
  return req.get (`/toplist/detail`);
}
export const getAlbumDetailRequest = id => {
  return req.get (`/playlist/detail?id=${id}`);
}

export const getSingersRequest = id => {
  return req.get (`/artists?id=${id}`);
};


