import { useContext, useState } from 'react'
import { HistoryContext } from './broserRouter'

const Name = () => {
  const { push } = useContext(HistoryContext)

  const toUser = () => {
    push('/');
  }

  return(
    <div>
      name:
      <button onClick={toUser}>去用户界面</button>
    </div>
  )
}

export default Name