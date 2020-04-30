import React, { useCallback } from 'react';
import './Header.css'
function Header(props){
    const {img,name}=props.data
    const {goBack}=props
    const goback=useCallback(()=>{
        goBack()
    })
    return (
            <div className='album-header' >
                <img className='bg' src={img+"?param=300x300"}></img>
                <div className='header-header'>
                    <span onClick={goback}>
                        <i className="iconfont">&#xe653;</i>
                        返回
                    </span>
                </div>
                <div className='header-title'>
                    <div className='img'>
                        <img src={img+"?param=300x300"}></img>
                    </div>
                    <div className='title'>
                        <span>{name}</span>
                    </div>
                </div>
            </div>
    )
}

export default React.memo(Header)