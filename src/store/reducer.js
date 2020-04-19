import * as actionTypes from './constants'


const defaultState = {
    bannerList: [],
    recommendList: [],
    isIndex:true
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
        newState['isIndex']= !newState['isIndex']
        return newState
      default:
        return newState;
    }
  }