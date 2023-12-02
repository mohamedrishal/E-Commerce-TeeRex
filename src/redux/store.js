import { configureStore} from "@reduxjs/toolkit";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer:{

        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice

    }
})

export default store;