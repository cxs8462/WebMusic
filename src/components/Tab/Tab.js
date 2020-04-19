import React from 'react';
import {NavLink} from 'react-router-dom'
import './Tab.css'
function Tab(props){
    
    const change=(e)=>{
        let selected=document.querySelector('.select')
        switch(e.currentTarget.getAttribute('select')){
            case 'recommend':
                selected.style.transform='translate(10%,0)'
                break
            case 'singers':
                selected.style.transform='translate(115%,0)'
                break
            case 'rank':
                selected.style.transform='translate(220%,0)'
                break
        }
    }
    return (
        <div className='tab-head'>
            <div className='head'>
                <span className='tab-menu'><i className='iconfont'>&#xe648;</i></span>
                <span className='tab-title'>Web Music</span>
                <span className='tab-seach'><i className='iconfont'>&#xe63c;</i></span>
            </div>
            <div className='tab' >
                <NavLink to="/recommend" select='recommend' onClick={change} activeClassName="selected">
                    <span > 推荐 </span>
                </NavLink>
                <NavLink to="/singers" select='singers' onClick={change} activeClassName="selected">
                    <span > 歌手 </span>
                </NavLink>
                <NavLink to="/rank" select='rank' onClick={change} activeClassName="selected">
                    <span > 排行榜 </span>
                </NavLink>
            </div>
            <div className='select'></div>
        </div>
    )
}
export default React.memo(Tab)