import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../BookSlice";
import { addtoCart } from "../CartSlice";
import { addtoWishlist } from "../WishlistSlice";

function BookDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const reqBook = useSelector((state) => state.book.selectedBook);

  useEffect(() => {
    dispatch(getOne(Number(id)));
  }, [id, dispatch]);

 const navigateto = useNavigate();
    var manageCart = () => {
    var obj = {
        ...reqBook,
        quantity: 1,
        username: localStorage.getItem("isLoggedIn")
    };

    dispatch(addtoCart(obj));
    alert("Book Added to Cart");
    navigateto("/User/cart");
};


 var manageWishlist = () => {
    var obj = {
        ...reqBook,
        quantity: 1,
        username: localStorage.getItem("isLoggedIn")
    };

    dispatch(addtoWishlist(obj));
    alert("Book Added to Wishlist");
    navigateto("/User/wishlist");
  };
  


  return (
    <div
      className="container-fluid p-4"
      style={{backgroundColor: "#F1F5F9",minHeight: "100vh"}}>


      <h1 className="fw-bold mb-4" style={{ color: "#087E8B" }}> Book Details </h1>

      {
      reqBook && (
        <div className="card shadow-lg border-0 rounded-4 p-3" style={{ maxWidth: "900px" }}>
          <div className="row g-3 align-items-center">

            <div className="col-12 col-md-5">
              <div className="d-flex justify-content-center align-items-center bg-white rounded-4"
                style={{  height: "350px", width: "100%", padding: "10px"  }} >
                <img src={reqBook.img}  alt={reqBook.title}
                 style={{ width: "100%", height: "100%",  objectFit: "contain" }} />
              </div>
            </div>

         
            <div className="col-12 col-md-7">
              <div className="p-3">
                <h2 className="fw-bold mb-3" style={{ color: "#087E8B" }}>  {reqBook.title}  </h2>

                <h6 className="mb-3">  Author: {reqBook.author} </h6>

                <p className="mb-3">  <strong>Description:</strong> {reqBook.description} </p>

                <h5 className="mb-4">
                  Price:{" "}  <span style={{ color: "#05A88F" }}>    ₹{reqBook.price}    </span>     </h5>

                <div className="d-flex flex-wrap gap-2">
                       <button className="btn btn-primary"> Buy Now</button>

                  <button className="btn btn-warning" onClick={manageCart}> Add to Cart</button>

                  <button className="btn btn-success" onClick={ manageWishlist} >Add to Wishlist </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetail;