import React,{useState, useEffect} from 'react';
import './Login.css'
function Login(props){
        const {is}=props  
        useEffect(()=>{
            
        },[])
        return (
            <div className='isLogin' style={is?{}:{display:'none'}}>
                <div className='wait1'>
                    
                </div>
                <div className='wait2'>
                    
                </div>
            </div>
        )
}
export default React.memo(Login)