import * as actionTypes from './constants';
import { 
  getBannerRequest, 
  getRecommendListRequest,
  getHotSingerListRequest, 
  getSingerListRequest
} from '../api/req';

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

export const changeHotSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_HOTLIST,
  data: data
});
export const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: data
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

export const getHotSingerList = (count) => {
  return (dispatch) => {
    getHotSingerListRequest (count).then (data => {
      dispatch (changeHotSingerList (data.artists));
    }).catch (() => {
      console.log ("热门歌手数据传输失败");
    });
  }
};

export const getSingerList = (a,b,c,d) => {
  return (dispatch) => {
    getSingerListRequest (a,b,c,d).then (data => {
      dispatch (changeSingerList (data.artists));
    }).catch (() => {
      console.log ("歌手列表传输错误");
    });
  }
};

export const setIndex=()=>{
 return (dispatch)=>{
   dispatch(changeIndex())
 }
}