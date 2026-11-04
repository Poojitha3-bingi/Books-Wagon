import {createSlice} from "@reduxjs/toolkit";
 const cartSlice = createSlice({
    name : "cart",
    initialState:{
        cartItems:[

        ],
        myCart:[

        ]
    },
    reducers:{
        addtoCart:(state,action)=>{
            var ind = state.cartItems.findIndex((obj)=>obj.id == action.payload.id && obj.username == action.payload.username)
        if(ind == -1){
            state.cartItems.push(action.payload);
        }else{
            state.cartItems[ind].quantity = state.cartItems[ind].quantity+1;
        }
        },

    removefromCart:(state,action)=>{
        var ind = state.cartItems.findIndex((obj)=>obj.cid == action.payload.cid && obj.username == action.payload.username)
       state.cartItems.splice(ind,1);

    },
    getCartByUsername:(state,action)=>{
        state.myCart = state.cartItems.filter((obj)=>obj.username == action.payload);
    },
    
    removeItemfromCart:(state,action)=>{
        var ind = state.cartItems.findIndex((obj)=>obj.cid == action.payload.cid && obj.username == action.payload.username)
       state.cartItems.splice(ind,1);

    },

 }
})
export const { addtoCart, removefromCart, removeItemfromCart,  getCartByUsername } = cartSlice.actions;
export default cartSlice.reducer;

  