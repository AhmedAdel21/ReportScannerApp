import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from '../shared/baseUrl';

import fetch from 'cross-fetch';

export const photoUpload = createAsyncThunk('redux/photoUpload',async (photo) => {
  var photoSend = {
    uri: photo,
    type: 'image/jpeg',
    name: 'photo.jpg',
    };
    //use formdata
    var formData = new FormData(); 
    //append created photo{} to formdata
    formData.append('fileData', photoSend);
    
  const response = await fetch (baseUrl + 'image/upload', {
                              method: "POST",
                              headers: { 'Content-Type': 'multipart/form-data' },
                              body: formData,
                            })
  const res = await response.json();
  return res;

})

export const photoDownload = createAsyncThunk('redux/photoDownload',async () => {
  const response = await fetch (baseUrl + 'dishes')
  const dishes = await response.json();
  return dishes;

})

export const imageSlice = createSlice({
    name: 'image',
    initialState: {errMess: null,user:'',images:[],status: 'idle'},
    reducers: {
        ADD_DISHES: (state, action) => {state.dishes = action.payload}
    },
    extraReducers: {
      [photoUpload.pending]: (state, action) => {
        console.log('pending dishes')
        state.status = 'loading'
      },
      [photoUpload.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        console.log('succeeded dishes')
        state.dishes = action.payload
      },
      [photoUpload.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed dishes')
        state.errMess = action.error.message
      },
      [photoDownload.pending]: (state, action) => {
        console.log('pending dishes')
        state.status = 'loading'
      },
      [photoDownload.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        console.log('succeeded dishes')
        state.dishes = action.payload
      },
      [photoDownload.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed dishes')
        state.errMess = action.error.message
      },
    }
})

export const { ADD_DISHES, DISHES_FAILED, DISHES_LOADING} = imageSlice.actions;
export default imageSlice.reducer;

