import React from 'react'
import './RecommendList.css'
import {withRouter} from 'react-router-dom'
function RecommendList(props){
    const {recommendList}=props
    if(JSON.stringify(recommendList) == "[]"||!recommendList){
        return <h3 style={{textAlign:"center"}}>无数据</h3>
    }
    const count=num=>{
        return parseInt(num/10000)+'万'
    }
    const click=id=>{
        props.history.push (`/recommend/${id}`)
    }
    return(
        <div className='recommendbox'>
            <h3>推荐</h3>
            <div className='itembox'>
                {recommendList.map((item,index)=>{
                    return (
                        <div onClick={()=>{click(item.id)}} className='recommend-item' key={item.picUrl+index}>
                            <img src={item.picUrl+ "?param=300x300"}/>
                            <div className='recommend-count'>
                                <span><i className='iconfont'>&#xe60b;</i>{count(item.playCount)}</span>
                            </div>
                            <span style={{textAlign:'left'}}>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default React.memo(withRouter(RecommendList))