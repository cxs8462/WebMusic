import * as actionTypes from './constants'


const defaultState = {
    bannerList: [],
    recommendList: [],
    isIndex:true,
    singerList:[],
    ranklist:[],
    isSinger:true,
    currentAlbum: {
      tracks:[]
    },
    enterLoading: true,
    singers:{
      artist:{},
      hotSongs:[]
    },
    singersLoding:true
}

export default (state = defaultState, action) => {
    const newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
      case actionTypes.CHANGE_BANNER:
        newState['bannerList']= action.data
        return newState
      case actionTypes.CHANGE_RECOMMEND_LIST:
        newState['recommendList']= action.data
        return newState
    case actionTypes.CHANGE_RECOMMEND_LOGIN:
        newState['isIndex']= action.data
        return newState
    case actionTypes.CHANGE_SINGER_HOTLIST:
        newState['singerList']= action.data
        return newState
    case actionTypes.CHANGE_SINGER_LIST:
        newState['singerList']= action.data
        return newState
    case actionTypes.CHANGE_RANK:
        newState['ranklist']= action.data
        return newState
    case actionTypes.CHANGE_SINGER_LODING:
        newState['isSinger']= action.data
        return newState
    case actionTypes.CHANGE_CURRENT_ALBUM:
        newState['currentAlbum']= action.data
        return newState
    case actionTypes.CHANGE_ENTER_LOADING:
        newState['enterLoading']= action.data
        return newState
    case actionTypes.CHANGE_SINGER_SINGERS:
        newState['singers']= action.data
        return newState
    case actionTypes.CHANGE_SINGERS_LODING:
        newState['singersLoding']= action.data
        return newState
      default:
        return newState;
    }
  }