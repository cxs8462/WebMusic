import React, { lazy, Suspense } from 'react';
import {Redirect} from 'react-router-dom'
import Home from '../app/Home'
import Loading from '../components/Login/Login'
const Rank = lazy(()=>import ('../app/Rank'))
const Recommend = lazy(()=>import ('../app/Recommend'))
const Singers = lazy(()=>import ('../app/Singers'))
const Album = lazy(()=>import ('../app/Album/Album'))
const Singer = lazy(()=>import ('../app/Singer/Singer'))
const Search = lazy(()=>import ('../app/Search/Search'))

const SuspenseComponent = Component => props => {
    return (
      <Suspense fallback={<Loading is={true}/>}>
        <Component {...props}></Component>
      </Suspense>
    )
  }
export default [
    {
        path:'/',
        component:Home,
        routes:[
            {
                path: "/search",
                exact: true,
                key: "search",
                component: SuspenseComponent(Search)
              },
            {
                path:'/',
                exact:true,
                render:()=>{
                   return (<Redirect to={'/recommend'}></Redirect>)
                }
            },
            {
                path:'/recommend',
                component:SuspenseComponent(Recommend),
                routes: [
                    {
                      path: "/recommend/:id",
                      component: SuspenseComponent(Album)
                    }
                  ]
            },
            {
                path:'/singers',
                component:SuspenseComponent(Singers),
                key: "singers",
                routes: [
                    {
                    path: "/singers/:id",
                    component: SuspenseComponent(Singer)
                    }
                ]
            },
            {
                path:'/rank',
                component:SuspenseComponent(Rank),
                key: "rank",
                routes: [
                    {
                    path: "/rank/:id",
                    component: SuspenseComponent(Album)
                    }
                ]
            },
        ]
    }
]