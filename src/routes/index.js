/**
 * Created by faraway on 17-8-31.
 */
import React from 'react'
import { Switch, Route } from 'react-router'
// import { Switch, Route } from 'react-router-native'

import SignUp from '../containers/SignUp'
import Entry from '../containers/Entry'
import Login from '../containers/Login'
import MainPage from '../components/MainPage'
import Instances from '../containers/Instances'
// 这很Vue
const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Entry
  },
  {
    path: '/login',
    exact: false,
    component: Login
  },
  {
    path: '/signup',
    exact: false,
    component: SignUp
  },
  {
    path: '/main',
    exact: false,
    component: MainPage,
    children: [
      {
        path: '/instances',
        exact: false,
        component: Instances
      }
    ]
  }
  // {
  //   path: '/search',
  //   exact: false,
  //   component: Search,
  //   children: [
  //     {
  //       path: '/:keyword',
  //       exact: false,
  //       component: SearchResult
  //     },
  //     {
  //       path: '',
  //       exact: true,
  //       component: SearchInfo
  //     }
  //   ]
  // },
  // {
  //   path: '/list/:type',
  //   exact: false,
  //   component: List
  // },
  // {
  //   path: '/detail/:shopName',
  //   exact: false,
  //   component: Detail
  // }
]

// 要求路由上的parent要能接受其children
const MyRoute = props => (
  <Route
    path={props.path}
    exact={props.exact}
    component={localProps =>
      <props.component {...localProps}>
        {
          props.children &&
          <Switch>
            {
              props.children.map(child =>
                <MyRoute key={child.path} {...child} path={localProps.match.path + child.path}/>
              )
            }
          </Switch>
        }
      </props.component>
    }
  />
)

export default () => (
  <Switch>
    {
      routesConfig.map(route => <MyRoute key={route.path} {...route}/>)
    }
  </Switch>
)
