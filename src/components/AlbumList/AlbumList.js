import React from 'react';
import './AlbumList.css'

function AlbumList(props){
    const {data}=props

    const allvieo=item=>{
        console.log(item)
    }
    const vieo=item=>{
        console.log(item)
    }
    return(
        <div className='album-list'>
            <div className='album-listhead'>
                <p>
                    <span onClick={allvieo}>
                    <i className='iconfont'>&#xe7c8;</i>
                        全部播放(共{data.length}首)
                    </span>
                </p>
            </div>
            <div className='list-item'>
                {data.map((item,index)=>{
                   return (<div onClick={()=>{vieo(item)}} key={item.name+index} className='item'>
                        <div className='number'>
                            <span>{index+1}</span>
                        </div>
                        <div className='content'>
                            <div className='title'>
                                <p>{item.name}</p>
                            </div>
                            <div className='singer'>
                                <p>{item.ar.reduce((total,item,index,arr)=>{
                                    if(index==arr.length-1) 
                                        return total+=item.name
                                    return total+=item.name+'/'
                                },'')+'---'+item.al.name}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default React.memo(AlbumList)