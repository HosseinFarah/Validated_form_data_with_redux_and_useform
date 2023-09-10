import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name:"form",
    initialState:{
        fname:"",
        lname:"",
        gender:"",
        age:"",
        password:"",
        email:"",
    },
    reducers:{
        getFname:(state,action)=>{state.fname = action.payload.data},
        getLname:(state,action)=>{state.lname = action.payload.data},
        getGender:(state,action)=>{state.gender = action.payload.data},
        getAge:(state,action)=>{state.age = action.payload.data},
        getPass:(state,action)=>{state.password = action.payload.data},
        getEmail:(state,action)=>{state.email = action.payload.data},
    }
})
export const {getAge,getEmail,getFname,getGender,getLname,getPass} = formSlice.actions;
export const store = configureStore({reducer:{
    form:formSlice.reducer
}})