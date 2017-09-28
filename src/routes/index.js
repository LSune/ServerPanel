/**
 * Created by faraway on 17-8-31.
 */
import React from 'react'
import { Switch, Route } from 'react-router'
// import { Switch, Route } from 'react-router-native'

import Login from '../containers/Login'

// 这很Vue
const routesConfig = [
  {
    path: '/',
    exact: true,
    component: Login
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
const MyRoute = (props) => (
  <Route
    path={props.path}
    exact={props.exact}
    component={(localProps) =>
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