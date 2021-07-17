import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from '../shared/baseUrl';
import fetch from 'cross-fetch';
import { useDispatch } from 'react-redux';
export const assignDoctor = createAsyncThunk('redux/assignDoctor',async (doctorID) => {
    //console.log(report);
  //console.log(newReport)
    const response = await fetch (baseUrl + 'report',{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report),
    })
    const res = await response.json();
  return res;

})

export const fetchDoctors = createAsyncThunk('redux/fetchDoctors',async () => {
  console.log("response");
  const response = await fetch (baseUrl + 'report')
  response = await response.json();
  console.log("response",response);
  return response;

})


export const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {errMess: null,doctorsData:[],status: 'idle'},
    reducers: {
        SEND_REPORTS: (state, action) => {state.reports.push(action.payload) }
    },
    extraReducers:  {
      [assignDoctor.pending]: (state, action) => {
        console.log('pending assignDoctor ');
        state.status = 'loading';
      },
      [assignDoctor.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        console.log('succeeded in assignDoctor');
        console.log("res:  ",action.payload);
        // setTimeout(() => {
        //   useDispatch(ADD_REPORTS(action.payload))
        // }, 2000);
        //console.log("action.payload",action.payload);
      },
      [assignDoctor.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed assignDoctor')
        state.errMess = action.error.message
      },
      [fetchDoctors.pending]: (state, action) => {
        console.log('pending fetchDoctors');
        state.status = 'loading';
      },
      [fetchDoctors.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        console.log('succeeded in fetchDoctors');
        state.doctorsData = action.payload;
        console.log(state.reports);
        //console.log("action.payload",action.payload);
      },
      [fetchDoctors.rejected]: (state, action) => {
        state.status = 'failed';
        console.log('failed fetchDoctors');
        state.errMess = action.error.message;
      },
    }
})

export const { SEND_REPORTS} = doctorSlice.actions;
export default doctorSlice.reducer;

