import React from 'react';
import './App.css'
import {HashRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import config from './routes/index'
function App(props) {
  return (
    <Router>
      {renderRoutes(config)}
    </Router>
  )
}
export default React.memo(App);
