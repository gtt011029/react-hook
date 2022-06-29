import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'tina',
    age: 18
  },
  reducers: {
    increment: (state) => {
      state.age ++
    },
    decrement: (state) => {
      state.age --
    },
    save: (state, action) => {
      state = action.payload
    }
  }
})

export const { increment, decrement, save } = userSlice.actions;
export const userData = (state) => state; // 这个地方获取的state是所有的数据

export default userSlice.reducer