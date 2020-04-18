import React from 'react';
import {Redirect} from 'react-router-dom'
import Home from '../app/Home'
import Rank from '../app/Rank'
import Recommend from '../app/Recommend'
import Singers from '../app/Singers'
export default [
    {
        path:'/',
        component:Home,
        routes:[
            {
                path:'/',
                exact:true,
                render:()=>{
                   return (<Redirect to={'/recommend'}></Redirect>)
                }
            },
            {
                path:'/recommend',
                component:Recommend
            },
            {
                path:'/singers',
                component:Singers
            },
            {
                path:'/rank',
                component:Rank
            },
        ]
    }
]