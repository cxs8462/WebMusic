import React, { useEffect, useState } from 'react';
import './Classify.css'
import Scroll from '../../app/scroll'
function Classify(props){
    const {data,name,order,getLsit}=props
    const [agoitem,setAgoitem]=useState(null)
    useEffect(()=>{
        let total=0
        const box=document.querySelectorAll('.classityitem')
        const item=box[order].childNodes
        item.forEach(item=>{
            total+=item.offsetWidth+10
        })
        box[order].style.width=total+'px'
    },[])
    const selectitem=(e)=>{
        if(agoitem){
            agoitem.className='classity-item'
        }
        setAgoitem(e.target)
        e.target.className='selected'
        let data=e.target.getAttribute('tag')
        const reg=/[a-zA-Z]/
        if(order==0){
            getLsit(data,'','',0)
        }else if(order==1){
            getLsit('',data,'',0)
        }else if(order==2){
            getLsit('','',data.toLowerCase(),0)
        }
    }
    return (
        <div style={{padding:'0 .1rem',marginTop:'.2rem'}}>
            <Scroll direction={"horizental"}>
                <div className='classityitem'>
                    <span className='classity-item'>
                        {name}
                    </span>
                    {data.map((item)=>{
                        return(
                            <span 
                            className='classity-item' 
                            key={item.key}
                            tag={item.key}
                            onClick={(e)=>{selectitem(e)}}
                            >
                                {item.name}
                            </span>
                        )
                    })}
                </div>
            </Scroll>
            </div>
    )
}

export default React.memo(Classify)