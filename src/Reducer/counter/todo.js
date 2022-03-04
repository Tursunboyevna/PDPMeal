import { createSlice } from '@reduxjs/toolkit'
import {postData} from '../Component/DataPost/DataPost'
import {v4} from 'uuid'
import SignIn from '../Component/SignIn/SignIn'
import DataGet from '../Component/DataGet/DataGet'
import { useSelector, useDispatch } from 'react-redux'
import {HomePagega} from '../Component/SignIn/SignIn'
import HomePage from '../Component/SignIn/HomePage'




const initialState = {
    value:[]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        sendData: (state,action) => {
            console.log(action)


               state.value.map(item=>{
                   console.log(item)
                item.registered=true;
                item.user=action.payload.userName;
                item.email=action.payload.email;
                item.pass=action.payload.password;  
                item.uniqueId=action.payload.id
                item.img="";
                item.about="";
                item.like=0;
                item.blog=[]
                // item.id=undefined;
               
            })
         
            
        },
      
     },
})

export const { sendData} = todoSlice.actions

export default todoSlice.reducer