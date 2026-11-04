
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./UDashboard.css";

import { getCartByUsername } from "../CartSlice";
import { getWishlistByUsername } from "../WishlistSlice";
import { getOrdersByUsername } from "../OrderSlice";

function UserDashboard() {

    var username = localStorage.getItem("isLoggedIn");

    var cartitems = useSelector((state) => state.cart.myCart);
    var wishlistitems = useSelector((state) => state.wishlist.myWishlistItems);
    var allOrders = useSelector((state) => state.order.myOrders);

    var dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartByUsername(username));
        dispatch(getWishlistByUsername(username));
        dispatch(getOrdersByUsername(username));
    }, [dispatch, username]);

    return (
        <>

   

            <div className="user-header">
                <h2>
                    Welcome, {username}!
                </h2>

                <p>
                    Discover your next favourite book with Books Wagon.
                </p>
            </div>


         

            <div className="user-dashboard">

           

                <nav className="user-sidebar">

                    <h3>
                        <i className="bi bi-book-half me-2"></i>
                        Books Wagon
                    </h3>

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/User/uhome"
                            >
                                <i className="bi bi-house-door-fill"></i>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/User/uviewBooks"
                            >
                                <i className="bi bi-book"></i>
                                View Books
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/User/cart"
                            >
                                <i className="bi bi-cart3"></i>
                                My Cart

                                <span className="badge">
                                    {cartitems?.length || 0}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/User/wishlist"
                            >
                                <i className="bi bi-heart"></i>
                                My Wishlist

                                <span className="badge">
                                    {wishlistitems?.length || 0}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/User/orders"
                            >
                                <i className="bi bi-box-seam"></i>
                                My Orders

                                <span className="badge">
                                    {allOrders?.length || 0}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item logout-item">
                            <Link
                                className="nav-link"
                                to="/User/ulogout"
                            >
                                <i className="bi bi-box-arrow-right"></i>
                                Logout
                            </Link>
                        </li>

                    </ul>

                </nav>


            

                <div className="user-content">
                    <Outlet />
                </div>

            </div>

        </>
    );
}

export default UserDashboard;
