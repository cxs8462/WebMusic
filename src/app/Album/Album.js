import React,{useState, useEffect} from 'react';
import './Album.css'
import { CSSTransition } from 'react-transition-group';
import Header from '../../components/Header/Header'
import AlbumList from '../../components/AlbumList/AlbumList'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actionCreators'
import Loding from '../../components/Login/Login'

function Album(props){
    const id = props.match.params.id
    const {data,loding,getdate,addSong}=props
      const goBack=()=>{
        setShowStatus (false)
      }
    const [showStatus, setShowStatus] = useState (true)
    useEffect(()=>{
        getdate(id)
    },[])
    return (
        <CSSTransition
            in={showStatus}  
            timeout={300} 
            classNames="fly" 
            appear={true} 
            unmountOnExit
            onExited={props.history.goBack}
        >
            <div className='album'>
                <Loding is={loding}/>
                <Header goBack={goBack} data={{img:data.coverImgUrl,name:data.name}}/>
                <AlbumList add={addSong} data={data.tracks} />
            </div>
            
        </CSSTransition>
    )
}
const setStates=status=>{
    return {
        data:status.currentAlbum,
        loding:status.enterLoading
    }
}
const getDate=dispatch=>{
    return{
        getdate(id){
            dispatch(actionCreators.getAlbumList(id))
        },
        addSong(item){
            dispatch(actionCreators.getSongs(item))
        }
    }
}

export default connect(setStates,getDate)(React.memo(Album))