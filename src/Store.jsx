
import bookS from './BookSlice';
import orderS from './OrderSlice';
import userS from "./UserSlice";

import cartS from './CartSlice';
import wishlistS from './WishlistSlice';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        book:bookS,
        cart:cartS,
        wishlist:wishlistS,
        order: orderS,
        user: userS
    }
})