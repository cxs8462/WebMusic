import React,{useEffect} from 'react';
import './SingerList.css'

function SingerList(props){
    const {data,setheight}=props
    const select=(e)=>{
        console.log(e.currentTarget.getAttribute('accountId'))
    }
    useEffect(()=>{
        const [s]=document.getElementsByClassName('singerlist')
        setheight(s.offsetHeight)
    })
    return (
            <div className='singerlist'>
                {data.map((item,index)=>{
                    return (
                        <div 
                        key={item.name+index} 
                        accountId={item.accountId} 
                        className='singerlist-item'
                        onClick={select}>
                            <div>
                                <img src={item.picUrl+'?param=300x300'}></img>
                            </div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
    )
    
}

export default React.memo(SingerList)