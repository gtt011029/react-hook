import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, userData } from '../../app/models/useSlice'

const User = () => {
  const data = useSelector(userData)
  console.log(data);

  return (
    <div>
      <h1>data</h1>
    </div>
  )
}

export default User