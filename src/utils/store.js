import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import offerSlice from "./offerSlice";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        offers: offerSlice
    }
});


export default store;