import React from 'react';
import './Login.css'
function Login(props){
        const {is}=props  
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