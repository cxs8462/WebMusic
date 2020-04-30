import React,{useEffect} from 'react';
import Classity from '../components/Classify/Classify'
import * as data from './class'
import SingersList from '../components/SingerList/SingerList'
import Scroll from '../app/scroll'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import Login from '../components/Login/Login'
import { renderRoutes } from 'react-router-config';

function Singers(props){
    const {
        singerList,
        getSingerlist,
        getSingerhot,
        isloding
    }=props
    const  list=actionCreators.exclassity
    const getLsit=async (a,b,c,d)=>{
        if(a!=='') list.a=a
        if(b!=='') list.b=b
        if(c!=='') list.c=c
        if(d!==list.d) list.d=d
        getSingerlist(list.a,list.b,list.c,list.d)
    }
    const setheight=(height)=>{
        document.getElementById('he').style.height=height-500+'px'

    }
    const goto=id=>{
        props.history.push (`/singers/${id}`)
    }
    useEffect(()=>{
        if(singerList.length==0){
            getSingerhot(0)
        }
    },[])
    
    return(
        <div>
            <div>
            { renderRoutes (props.route.routes) }
            </div>
            <Classity getLsit={getLsit} data={data.category_singer} name='歌手分类' order={0}/>
            <Classity getLsit={getLsit} data={data.category_where} name='地区分类' order={1}/>
            <Classity getLsit={getLsit} data={data.category_types} name='首字母' order={2}/>
                <Scroll>
                    <div id='he'
                    style={{width:'100%',position:'fixed',top:'10rem',zIndex:'-1'}}>
                    <SingersList click={goto} setheight={setheight}  data={singerList}/>
                    </div>
                </Scroll>
            <Login is={isloding}></Login>
        </div>
    )
}
const setState=state=>{
    return {
        singerList:state.singerList,
        isloding:state.isSinger
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