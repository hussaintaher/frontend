import { createSlice } from "@reduxjs/toolkit";
import {destroyCookie, setCookie} from 'nookies'
/************************************/
           // initialState 
/************************************/
const initialState = {
    email: "",
}

/************************************/
            // Slices 
/************************************/
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.email = action.payload.email;

            setCookie(null, 'jwt', action.payload.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
        },
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;

            destroyCookie(null, 'jwt') // I have to refresh the page 
            
        }
    }
})

/************************************/
            // Export Actions 
/************************************/
export const {setUserLoginDetails, setSignOutState} = userSlice.actions; // these are actions

/************************************/
            // Export Selectors 
/************************************/
// retreive a specific data by help of these functions
//export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
//export const selectUserPhoto = (state) => state.user.photo;

/************************************/
            // Export Reducer 
/************************************/
export default userSlice.reducer;