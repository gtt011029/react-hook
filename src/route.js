import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { RouterContext } from './broserRouter'

const Route = (props) => {
  const {path: routePath, component: RouteComponent} = props;
  const path = useContext(RouterContext);
  return path === routePath ? <RouteComponent /> : null

}

export default Route