import React,{useEffect} from 'react';
import './SingerList.css'

function SingerList(props){
    const {data,setheight,click}=props
    const select=(item)=>{
        click(item.id)
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
                        className='singerlist-item'
                        onClick={()=>{select(item)}}>
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