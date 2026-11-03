import { useDispatch, useSelector } from "react-redux";
import { getCartByUsername } from '../CartSlice';
import { useEffect } from "react";
import { useState } from "react";
import { addtoOrders } from "../OrderSlice";
import { useNavigate } from "react-router-dom";

export default function Cart(){

    var[dummy, setDummy] = useState(null);
    var[phone, setPhone] = useState(" ");
    var[address, setAddress] = useState(" ");


    function receiveddata(obj){
        setDummy(obj);
    }

    var navigateto = useNavigate();


    function placeOrder(){
        var orderobj = {
            ...dummy,
          username: localStorage.getItem("isLoggedIn"),
            userPhone:phone,
            userAddress:address
        }
        console.log( orderobj)
        dispatch(addtoOrders(orderobj))
        alert("order placed succesfully!....")
        navigateto("/User/orders")
    }

    function placeAllOrders() {
    cartitems.forEach((c) => {
        var orderobj = {
            ...c,
            username: localStorage.getItem("isLoggedIn"),
            userPhone: phone,
            userAddress: address
        };
        dispatch(addtoOrders(orderobj));
    });
    alert("All orders placed successfully!");
    navigateto("/User/orders");
}





  var cartitems = useSelector(state=>state.cart.myCart); 



var totalOrders = cartitems ? cartitems.reduce((total, c) => total + Number(c.quantity), 0) : 0;
var totalSumPrice = cartitems ? cartitems.reduce((total, c) => total + (Number(c.price) * Number(c.quantity)), 0) : 0;

  var dispatch = useDispatch();

  useEffect(()=>{
    var username = localStorage.getItem("isLoggedIn");
    dispatch(getCartByUsername(username));
  },[dispatch])


  


    return(
        <>
       <table className = "table table-bordered">
            <thead>
                <tr>
                    <th>sNo</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

                {
                cartitems &&
                cartitems.map((c,ind)=>(

                    <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{c.title}</td>
                        <td>{c.price}</td>
                        <td>{c.quantity}</td>
                        <td> <img src = {c.img} height = {150} width = {200} alt = " " /> </td>
                        <td><button className = "btn btn-primary" data-bs-target = "#ordermodal" data-bs-toggle = "modal" onClick = {()=>receiveddata(c)}>Buy Now</button>
                        <button className = "btn btn-danger">Remove</button>
                        </td>
                    </tr>

                    
            
                ))
            }

              <tr>
        <td colSpan={2} className="fw-bold">Total Orders: {totalOrders} </td>

        <td colSpan={2} className="fw-bold">Total Sum Price: ₹ {totalSumPrice} </td>

        <td colSpan={2} className="text-center">
            <button className="btn btn-success" onClick={placeAllOrders} >Place All Orders</button>
        </td>
    </tr>
                
            </tbody>
        </table>
    

                

       <div className="modal fade" id="ordermodal" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden"
             style={{ backgroundColor: "#F1F8F8" }}>

          
            <div className="modal-header text-white border-0" style={{ backgroundColor: "#176B70" }}>

                <h5 className="modal-title fw-bold">
                    <i className="bi bi-bag-check me-2"></i>
                    You are ordering {dummy && dummy.title}
                </h5>

                <button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

       
            <div className="modal-body p-4">

                <div className="mb-3">
                    <label className="form-label fw-semibold" style={{ color: "#176B70" }}><i className="bi bi-telephone me-2"></i>
                        Phone Number
                    </label>

         <input type="text" className="form-control rounded-3 border-0 shadow-sm p-3"placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold"style={{ color: "#176B70" }}><i className="bi bi-geo-alt me-2"></i>
                        Delivery Address
                    </label>


        <input type="text" className="form-control rounded-3 border-0 shadow-sm p-3"placeholder="Enter your delivery address"
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
            </div>

        
            <div className="modal-footer border-0 p-3" style={{ backgroundColor: "#E0EEEE" }}>

         <button className="btn btn-outline-secondary rounded-3 px-4" data-bs-dismiss="modal">Cancel</button>

    <button className="btn text-white fw-semibold rounded-3 px-4" style={{ backgroundColor: "#176B70" }} onClick={placeOrder}
                    data-bs-dismiss="modal">
                    <i className="bi bi-check-circle me-2"></i>
                    Order Now
                </button>

            </div>

        </div>
    </div>
</div>
    
        </>
    )
}
