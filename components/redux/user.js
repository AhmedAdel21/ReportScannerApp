import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from '../shared/baseUrl';
import fetch from 'cross-fetch';
import { useDispatch } from 'react-redux';

export const signin = createAsyncThunk('redux/signin',async (loginData) => {
  const response = await fetch (baseUrl + 'users/login',{
                          method: "POST",
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(loginData),

})
  const res = await response.json();
  console.log(res)
  return res;

})

export const singup = createAsyncThunk('redux/singup',async (newUser) => {
  
  // useDispatch(ADD_USER(firstname))
  // newUser.date = new Date().toISOString();
  console.log(newUser)
  const response = await fetch (baseUrl + 'users/signup',{
                            method: "POST",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newUser),
    
  })
  const res = await response.json();
  console.log(res)
  return res;

})
const dummyData = [
  {
    id:"0",
    name:"dola",
    subtitle:"dodldld"
  },
  {
    id:"1",
    name:"saddola",
    subtitle:"dodlsacscasdcadld"
  },
  {
    id:"2",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"3",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"4",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"5",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"6",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"7",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"8",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"9",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"10",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"11",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"12",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"13",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"14",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"15",
    name:"asddola",
    subtitle:"dxcvodldld"
  },
  {
    id:"16",
    name:"asddola",
    subtitle:"dxcvodldld"
  }
]
export const userSlice = createSlice({
    name: 'user',
    initialState: {errMess: null,data:dummyData,firstname:'ahmed',surname:'adel',mobOrEmail:'',logedin:false,status: 'idle'},
    reducers: {
        ADD_USER: (state, action) => {
          state.firstname = action.payload
        }
    },
    extraReducers: {
      [signin.pending]: (state, action) => {
        console.log('pending sigin in')
        state.status = 'loading'
      },
      [signin.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        console.log('succeeded sigin in')
        state.logedin = true
      },
      [signin.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed sigin in')
        state.errMess = action.error.message
      },
      [singup.pending]: (state, action) => {
        console.log('pending sigin up')
        state.status = 'loading'
      },
      [singup.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        console.log('succeeded sigin up')
        
      },
      [singup.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('failed sigin up')
        state.errMess = action.error.message
      },
    }
})

export const { ADD_USER} = userSlice.actions;
export default userSlice.reducer;

