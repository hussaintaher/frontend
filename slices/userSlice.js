import { createSlice } from "@reduxjs/toolkit";

/************************************/
           // initialState 
/************************************/
const initialState = {
    name: "",
    email: "",
    photo: "",
}

/************************************/
            // Slices 
/************************************/
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
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
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

/************************************/
            // Export Reducer 
/************************************/
export default userSlice.reducer;