import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
    name: 'offers',
    initialState : {
       offerItems: []
    },
    reducers :{
        addOffer : (state,action)=>{
         state.offerItems.push(action.payload)
        },
        removeOffer : (state,action) =>{
            state.offerItems.pop()
      },
        clearOffer : (state)=>{
           state.offerItems =[]
        }
    }
})

export const { addOffer, removeOffer, clearOffer} = offerSlice.actions;

export default offerSlice.reducer;