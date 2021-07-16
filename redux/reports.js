import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from '../shared/baseUrl';
import fetch from 'cross-fetch';
import { useDispatch } from 'react-redux';

export const postReports = createAsyncThunk('redux/postReports',async (report) => {
    //console.log(report);
  //console.log(newReport)
    const response = await fetch (baseUrl + 'report',{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report),
      credentials: "same-origin"
    })
    res = await response.json();
  
  //console.log("res:  ",res);
//   setTimeout(() => {
//     useDispatch(ADD_REPORTS(res))
//   }, 2000);
  return res;

})

export const getReports = createAsyncThunk('redux/getReports',async () => {
  console.log("response");
  const response = await fetch (baseUrl + 'report')
  response = await response.json();
  console.log("response",response);
  return response;

})


export const reportSlice = createSlice({
    name: 'report',
    initialState: {errMess: null,reports:[],status: 'idle'},
    reducers: {
        ADD_REPORTS: (state, action) => {state.reports.push(action.payload) }
    },
    extraReducers: {
      [postReports.pending]: (state, action) => {
        console.log('pending sigin in');
        state.status = 'loading';
      },
      [postReports.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        console.log('succeeded in postReports');
        
        //console.log("action.payload",action.payload);
      },
      [postReports.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed sigin in')
        state.errMess = action.error.message
      },
      [getReports.pending]: (state, action) => {
        console.log('pending sigin in');
        state.status = 'loading';
      },
      [getReports.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        console.log('succeeded in getReports');
        state.reports = action.payload;
        console.log(state.reports);
        //console.log("action.payload",action.payload);
      },
      [getReports.rejected]: (state, action) => {
        state.status = 'failed';
        console.log('failed sigin in');
        state.errMess = action.error.message;
      },
    }
})

export const { ADD_REPORTS} = reportSlice.actions;
export default reportSlice.reducer;

