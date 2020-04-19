import { req } from "./config";

export const getBannerRequest = () => {
  return req.get ('/banner');
}

export const getRecommendListRequest = () => {
  return req.get ('/personalized');
}

