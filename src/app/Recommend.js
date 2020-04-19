import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner'
import RecommendList from '../components/RecommendList/RecommendList'
import Scroll from './scroll'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import Login from '../components/Login/Login'

function Recommend(props){
    const {bannerList,recommendList,is}=props
    const {getBannerList,getRecommendList,setLogin}=props
    useEffect(()=>{
        if(bannerList.length!=0&&recommendList.length!=0){
            return
        }
       
        async function getdata(){
            await getRecommendList()
            await getBannerList()
            setLogin()
            console.log(is)
        }
          getdata()
    },[])
    return(
        <div style={
            {
                position: 'fixed',
                top: '90px',
                bottom: '0',
                width: '100%'
            }
        }>
            <Login is={is}/>
            <Scroll>
                <div>
                    <Banner bannerList={bannerList}/>
                    <RecommendList recommendList={recommendList}/>  
                </div>
            
            </Scroll>
        </div>
    )
}
const setState=(state)=>{
    return {
    bannerList:state.bannerList,
    recommendList:state.recommendList,
    is:state.isIndex
    }
}
const dis=(dispath)=>{
    return {
        getBannerList(){
             dispath(actionCreators.getBannerList())
         },
         getRecommendList(){
            dispath(actionCreators.getRecommendList())
         },
         setLogin(){
             dispath(actionCreators.setIndex())
         }
    }
}
export default connect(setState,dis)(React.memo(Recommend))