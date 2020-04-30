import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import './Rank.css'
import { renderRoutes } from 'react-router-config';

function Rank(props){
    const {data,getlist}=props
    const list1=data.slice(0,4)
    const list2=data.slice(4)
    useEffect(()=>{
        if(data.length==0)
            getlist()
    },[])
    const click=item=>{
        props.history.push (`/rank/${item.id}`)
    }
    return(
        <div className='rank-box'>
            <div>
            { renderRoutes (props.route.routes) }
            </div>
            {list1.map(item=>{
                return(
                    <div onClick={()=>{click(item)}} className='rank-list1' key={item.id}>
                        <div className='rank-rank'>
                            {item.tracks.map((item,index)=>{
                                return (
                                    <p key={item.first+index}>
                                        {(index+1)+'.'+item.first+'--'+item.second}
                                    </p>
                                )
                            })}
                        </div>
                        <div className='rank-img'>
                            <img src={item.coverImgUrl+'?param=300x300'}></img>
                        </div>
                    </div>
                )
            })}
            <div className='rank-list2'>
            {list2.map(item=>{
                return (
                    <div onClick={()=>{click(item)}} key={item.id}>
                        <div className='rank-img'>
                            <img src={item.coverImgUrl+'?param=300x300'}></img>
                        </div>
                        <div className='rank-name'>
                            <p>{item.name}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
const setState=states=>{
    return {
        data:states.ranklist
    }
}
const getList=dispatch=>{
    return {
        getlist(){
            dispatch(actionCreators.getRank())
        }
    }
}
export default connect(setState,getList)(React.memo(Rank))