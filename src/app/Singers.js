import React,{useEffect} from 'react';
import Classity from '../components/Classify/Classify'
import * as data from './class'
import SingersList from '../components/SingerList/SingerList'
import Scroll from '../app/scroll'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'


function Singers(props){
    const {singerList,getSingerlist,getSingerhot}=props
    const  list={a:'',b:'',c:''}
    const getLsit= (a,b,c,d)=>{
        list.a=a
        list.b=b
        list.c=c
        getSingerlist(list.a,list.b,list.c,d)
    }
    const setheight=(height)=>{
        document.getElementById('he').style.height=height-500+'px'

    }

    useEffect(()=>{
        if(singerList.length==0){
            getSingerhot(0)
        }
    },[])
    
    return(
        <div>
            <Classity getLsit={getLsit} data={data.category_singer} name='歌手分类' order={0}/>
            <Classity getLsit={getLsit} data={data.category_where} name='地区分类' order={1}/>
            <Classity getLsit={getLsit} data={data.category_types} name='首字母' order={2}/>
                <Scroll>
                    <div id='he'
                    style={{width:'100%',position:'fixed',top:'10rem',zIndex:'-1'}}>
                    <SingersList setheight={setheight}  data={singerList}/>
                    </div>
                </Scroll>
        </div>
    )
}
const setState=state=>{
    return {
        singerList:state.singerList
    }
}
const setDispath=dispatch=>{
    return {
        getSingerhot(index){
            dispatch(actionCreators.getHotSingerList(index))
        },
        getSingerlist(singer,where,type,page){
            dispatch(actionCreators.getSingerList(singer,where,type,page))
        }
    }
}

export default connect(setState,setDispath)(React.memo(Singers))