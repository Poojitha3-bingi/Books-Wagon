import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUsername } from '../OrderSlice';
import { useEffect } from "react";


export default function Orders(){

    

var allOrders = useSelector((state) => state.order.myOrders); 

  var dispatch = useDispatch();

  useEffect(()=>{
    var username = localStorage.getItem("isLoggedIn");
    dispatch(getOrdersByUsername(username));
  },[dispatch])


    return(
        <>
       
    <div className="container mt-4">
    <div className="row">
        {
            allOrders && allOrders.map((c, ind) => (
                <div className="col-md-4 mb-3" key={ind}>
                  <div className="card shadow h-100 rounded-4 overflow-hidden"
     style={{ backgroundColor: "#E8F6F5", border: "1px solid #CDE8E5" }}>

                        <div style={{
                            width: "100%",
                            height: "350px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white"
                        }}>
                            <img
                                src={c.img}
                                alt={c.title}
                                style={{
                                    width: "100%",
                                    height: "330px",
                                    objectFit: "contain"
                                }}
                            />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{c.title}</h5>

                            <p className="card-text">
                                <b>Price:</b> ₹{c.price}
                            </p>
                            <p className="card-text">
                                <b>Quantity:</b> {c.quantity}
                            </p>
                            <p className="card-text">
                                <b>Phone:</b> {c.userPhone}
                            </p>
                            <p className="card-text">
                                <b>Address:</b> {c.userAddress}
                            </p>
                        </div>

                    </div>
                </div>
            ))
        }
    </div>
</div>
                
         
        </>
    )
}
