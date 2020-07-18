import React from 'react';
import {renderRoutes} from 'react-router-config'
import './Home.css'
import Top from '../components/Tab/Tab'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import player from './Player/config'
import { connect } from 'react-redux';
function Home(props){
    const {songlist}=props
    return(
        <div>
            <Top/>
            <ReactJkMusicPlayer  lyricClassName='player' {...player} audioLists={songlist}/>
            {renderRoutes(props.route.routes)}
        </div>
    )
}
const states=states=>{
    return {
        songlist:states.songList
    }
}
export default connect(states)(React.memo(Home)) 