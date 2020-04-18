import React from 'react';
import {renderRoutes} from 'react-router-config'
import './Home.css'
import Top from '../components/Tab'
function Home(props){
    return(
        <div>
            <Top/>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default Home