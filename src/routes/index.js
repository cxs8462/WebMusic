import React from 'react';
import {Redirect} from 'react-router-dom'
import Home from '../app/Home'
import Rank from '../app/Rank'
import Recommend from '../app/Recommend'
import Singers from '../app/Singers'

import Album from '../app/Album/Album'
import Singer from '../app/Singer/Singer';

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
                component:Recommend,
                routes: [
                    {
                      path: "/recommend/:id",
                      component: Album
                    }
                  ]
            },
            {
                path:'/singers',
                component:Singers,
                key: "singers",
                routes: [
                    {
                    path: "/singers/:id",
                    component: Singer
                    }
                ]
            },
            {
                path:'/rank',
                component:Rank,
                key: "rank",
                routes: [
                    {
                    path: "/rank/:id",
                    component: Album
                    }
                ]
            },
        ]
    }
]