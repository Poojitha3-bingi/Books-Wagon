import { createSlice } from "@reduxjs/toolkit";
var orderSlice = createSlice({
    name:"order",
    initialState:{
        allOrders:[],
        myOrders:[]
    },
    reducers:{
        addtoOrders:(state,action)=>{
            state.allOrders.push(action.payload);
            state.myOrders = state.allOrders.filter((obj)=>obj.username == action.payload.username);
        },  
    
        getOrdersByUsername:(state,action)=>{
             state.myOrders = state.allOrders.filter((obj)=>obj.username == action.payload);
        },
         
        deletefromOrders:()=>{
         var ind = state.allOrders.findIndex((obj)=>obj.cid == action.payload.cid && obj.username == action.payload.username)
       state.allOrders.splice(ind,1);
        }
        
    }
})
export const { addtoOrders,   getOrdersByUsername } = orderSlice.actions;
export default orderSlice.reducer;