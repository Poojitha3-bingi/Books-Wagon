import { useDispatch, useSelector } from "react-redux";
import { getWishlistByUsername } from '../WishlistSlice';
import { useEffect } from "react";

export default function Wishlist(){

  var wishlistitems = useSelector(state=>state.wishlist.myWishlistItems); 

  var dispatch = useDispatch();

  useEffect(()=>{
    var username = localStorage.getItem("isLoggedIn")
    dispatch(getWishlistByUsername(username));
  },[dispatch])


    return(
        <>
      
       <div className="container mt-4">
    <div className="row">

        {
            wishlistitems && wishlistitems.map((c, ind) => (

                <div className="col-md-4 mb-4" key={ind}>
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

                            <button className="btn btn-primary me-2">
                                Buy Now
                            </button>

                            <button className="btn btn-danger">
                                Remove
                            </button>

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
