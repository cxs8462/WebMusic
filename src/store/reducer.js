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
    singersLoding:true,
    songList:[
      {
        name:'与我无关',
        singer:'阿冗',
        cover:'https://p2.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg',
        musicSrc:'https://music.163.com/song/media/outer/url?id=1413585838.mp3',
        lyric:'[00:00.000] 作曲 : 席雨/豪斯Music\n[00:01.000] 作词 : 张芷芮/席雨/豪斯Music\n[00:05.680]编曲： 许蔚天\n[00:09.850]\n[00:18.310]过往早已变得平淡，甚至开始自我调侃\n[00:25.510]偶尔心头一酸，掀起一些波澜\n[00:33.150]雨天撑着的双人伞，路过最爱那家餐馆\n[00:40.460]戒一半的习惯，没庆祝的圣诞\n[00:49.280]应该嘘寒问暖还是借口不谈\n[00:55.410]那些遗憾留在心底成为旧患\n[01:04.969]开始的倾心交谈 沦为平淡\n[01:09.420]望眼欲穿 等不到你的晚安\n[01:14.189]全都 与我无关\n[01:20.299]反正我早已习惯 一个人孤单\n[01:24.879]心酸为难 也要假装自然\n[01:29.799]惨淡或灿烂 全与我无关\n[01:37.580]反正我早习惯你已不在\n[01:40.870]一个人的空白假装释怀\n[01:44.670]自我感动是病态\n[01:46.739]我回头看是阴霾\n[01:48.959]不想要你理睬变成阻碍\n[01:52.379]我早习惯你已不在\n[01:59.760]一个人的空白假装释怀\n[02:07.010]开始的倾心交谈 沦为平淡\n[02:11.330]望眼欲穿 等不到你的晚安\n[02:16.210]全都 与我无关\n[02:22.270]反正我早已习惯 一个人孤单\n[02:26.789]心酸为难 也要假装自然\n[02:31.830]惨淡或灿烂 全与我无关\n[02:45.560]开始的倾心交谈 沦为平淡\n[02:49.979]望眼欲穿 等不到你的晚安\n[02:54.870]全都 与我无关\n[03:01.030]反正我早已习惯 一个人孤单\n[03:05.460]心酸为难 也要假装自然\n[03:10.340]惨淡或灿烂 全与我无关\n[03:28.729]制作人：王佳依\n[03:30.430]监制：姚政\n[03:31.650]统筹：黄鲲/陈尚禔\n[03:32.620]企划：小粉\n[03:33.620]配唱制作人：李坚瑜\n[03:36.360]钢琴/合成器： 许蔚天\n[03:38.430]吉他： 周坤\n[03:40.259]和声： 许蔚天/胡阁\n[03:42.210]混音：陈程\n[03:44.289]母带：陈程\n[03:46.669]发行： 网易音乐人 x 不要音乐\n'
      }
    ]
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
    case actionTypes.CHANGE_PLAER_LIST:
        newState['songList'].push(action.data)
        return newState
        default:
        return newState;
    }
  }