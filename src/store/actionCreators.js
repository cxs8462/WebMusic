import * as actionTypes from './constants';
import { 
  getBannerRequest, 
  getRecommendListRequest,
  getHotSingerListRequest, 
  getSingerListRequest,
  getRankListRequest,
  getAlbumDetailRequest,
  getSingersRequest,
  getlyricRequest
} from '../api/req';

export const exclassity={a:'',b:'',c:'',d:0}
export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data
});


export const changeHotSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_HOTLIST,
  data: data
});
export const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: data
});
export const changeRank = (data) => ({
  type: actionTypes.CHANGE_RANK,
  data: data
});
export const changeCurrentAlbum = (data) => ({
  type: actionTypes.CHANGE_CURRENT_ALBUM,
  data: data
});
export const changeSingers = (data) => ({
  type: actionTypes.CHANGE_SINGER_SINGERS,
  data: data
});
export const lodingtrue = (type) => ({
  type: type,
  data: true
})
export const lodingfalse = (type) => ({
  type: type,
  data: false
})
export const changeSongs = (data) => ({
  type: actionTypes.CHANGE_PLAER_LIST,
  data: data
})

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
    dispatch(lodingtrue(actionTypes.CHANGE_RECOMMEND_LOGIN))
    getRecommendListRequest ().then (data => {
      dispatch (changeRecommendList (data.result));
      dispatch(lodingfalse(actionTypes.CHANGE_RECOMMEND_LOGIN))
    }).catch (() => {
      console.log ("推荐歌单数据传输错误");
    });
  }
};

export const getHotSingerList = (count) => {
  return (dispatch) => {
    dispatch(lodingtrue(actionTypes.CHANGE_SINGER_LODING))
    getHotSingerListRequest (count).then (data => {
      dispatch (changeHotSingerList (data.artists));
      dispatch(lodingfalse(actionTypes.CHANGE_SINGER_LODING))
    }).catch (() => {
      console.log ("热门歌手数据传输失败");
    });
  }
};

export const getSingerList = (a,b,c,d) => {
  return (dispatch) => {
    dispatch(lodingtrue(actionTypes.CHANGE_SINGER_LODING))
    getSingerListRequest (a,b,c,d).then (data => {
      dispatch (changeSingerList (data.artists));
      dispatch(lodingfalse(actionTypes.CHANGE_SINGER_LODING))
    }).catch (() => {
      console.log ("歌手列表传输错误");
    });
  }
};

export const getRank = () => {
  return (dispatch) => {
    getRankListRequest ().then (data => {
      dispatch (
        changeRank (data.list)
        )}).catch (() => {
      console.log ("排行榜传输错误");
    });
  }
};

export const getAlbumList = (id) => {
  return dispatch => {
    dispatch(lodingtrue(actionTypes.CHANGE_ENTER_LOADING))
    getAlbumDetailRequest (id).then (res => {
      let data = res.playlist;
      dispatch (changeCurrentAlbum (data))
      dispatch(lodingfalse(actionTypes.CHANGE_ENTER_LOADING))
    }).catch (() => {
      console.log ("获取歌单数据失败！")
    });
  }
};
export const getSingers = (id) => {
  return dispatch => {
    dispatch(lodingtrue(actionTypes.CHANGE_SINGERS_LODING))
    getSingersRequest (id).then (res => {
      dispatch (changeSingers (res))
      dispatch(lodingfalse(actionTypes.CHANGE_SINGERS_LODING))
    }).catch (() => {
      console.log ("获取歌单数据失败！")
    });
  }
}
export const getSongs = (item) => {
  return dispatch => {
    getlyricRequest(item.id).then((res)=>{
      let data={
        lyric:res.lrc.lyric,
        name:item.name,
        singer:item.ar[0].name,
        cover:item.al.picUrl,
        musicSrc:'https://music.163.com/song/media/outer/url?id='+item.id+'.mp3'
      }
      dispatch (changeSongs (data))
    })
  }
}

