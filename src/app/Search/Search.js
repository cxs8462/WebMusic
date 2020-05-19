import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import './Search.css'
function Search (props) {
  const [show, setShow] = useState (false);
  const goback=()=>{
    setShow(false)
}
  useEffect (() => {
    setShow (true);
  }, []);
  return (
    <CSSTransition
    in={show}
    timeout={300}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExited={props.history.goBack}
  >
        <div className='Search'>
            <div className='Search-header'>
                <span onClick={goback}>
                    <i className="iconfont">&#xe653;</i>
                    返回
                </span>
            </div>
            待开发
        </div>
  </CSSTransition>
  )
}

export default Search;