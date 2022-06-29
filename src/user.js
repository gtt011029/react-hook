import { useContext, useState } from 'react'
import { HistoryContext } from './broserRouter'

const User = () => {
  const { push } = useContext(HistoryContext)

  const toUser = () => {
    push('/name');
  }

  return(
    <div>
      name:
      <button onClick={toUser}>去name界面</button>
    </div>
  )
}

export default User