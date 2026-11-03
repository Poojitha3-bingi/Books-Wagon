import {createSlice} from "@reduxjs/toolkit";
 const WishlistSlice = createSlice({
    name : "wishlist",
    initialState:{
        wishlistItems:[],

        myWishlistItems:[]
    },
    reducers:{
        addtoWishlist:(state,action)=>{
            var ind = state.wishlistItems.findIndex((obj)=>obj.id == action.payload.id && obj.username == action.payload.username)
        if(ind == -1){
            state.wishlistItems.push(action.payload);
        }else{
            state.wishlistItems[ind].quantity = state.wishlistItems[ind].quantity+1;
        }
        state.myWishlistItems = state.wishlistItems.filter((obj)=>obj.username == action.payload.username);
        },

     removefromWishlist:(state,action)=>{
        var ind = state.wishlistItems.findIndex((obj)=>obj.cid == action.payload.cid && obj.username == action.payload.username)
       state.wishlistItems.splice(ind,1);

    },
    getWishlistByUsername:(state,action)=>{
        state.myWishlistItems = state.wishlistItems.filter((obj)=>obj.username == action.payload);
    }

 }
})
export const {addtoWishlist, removefromWishlist, getWishlistByUsername} = WishlistSlice.actions;
export default WishlistSlice.reducer;

  