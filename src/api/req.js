import { req } from "./config";

export const getBannerRequest = () => {
  return req.get ('/banner');
}

export const getRecommendListRequest = () => {
  return req.get ('/personalized?limit=30');
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
export const getlyricRequest = id => {
  return req.get (`/lyric?id=${id}`);
};


export const getSeacherRes = keywords =>{
  return req.get(`/search?limit=50&keywords=${keywords}`)
}
