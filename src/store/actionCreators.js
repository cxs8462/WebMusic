import * as actionTypes from './constants';
import { getBannerRequest, getRecommendListRequest } from '../api/req';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data
});

export const changeIndex = () => ({
  type: actionTypes.CHANGE_RECOMMEND_LOGIN,
});

export const getBannerList = () => {
  return async(dispatch) => {
    await getBannerRequest ().then (data => {
      dispatch (changeBannerList (data.banners));
    }).catch (() => {
      console.log ("轮播图数据传输错误");
    }) 
  }
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest ().then (data => {
      dispatch (changeRecommendList (data.result));
    }).catch (() => {
      console.log ("推荐歌单数据传输错误");
    });
  }
};

export const setIndex=()=>{
 return (dispatch)=>{
   dispatch(changeIndex())
 }
}