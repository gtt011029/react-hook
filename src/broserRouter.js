import { createContext, useEffect, useRef, useState } from 'react'

export const RouterContext = createContext();
export const HistoryContext = createContext()

const BrowserRouter = (props) => {

  const [path, setPath] = useState(() => {
    const pathname = window.location.pathname;
    return pathname || '';
  })

  const handlePopState = () => {
    const { pathname = ''} = window.location;
    setPath(pathname);
  }

  const push = (path) => {
    window.history.pushState({path}, null, path);
    setPath(path)
  }

  useEffect(() => {
    // 监听url的变化
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return <RouterContext.Provider value={path}>
    <HistoryContext.Provider value={{push}}>
      {props.children}
    </HistoryContext.Provider>
  </RouterContext.Provider>

}

export default BrowserRouter