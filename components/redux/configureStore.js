import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user';
import imageSlice from './images';


export default configureStore({
  reducer: {
    user: userSlice,
    image: imageSlice,

  }
})