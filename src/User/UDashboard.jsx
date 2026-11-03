import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './UDashboard.css';

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
    }, []);

    useEffect(() => {
        dispatch(getWishlistByUsername(username));
    }, []);

    useEffect(() => {
        dispatch(getOrdersByUsername(username));
    }, []);

    return (
        <>
           
            <div className="container-fluid p-4 user-header">
                <h2 className="fw-bold mb-1">
                    Welcome, {username}!
                </h2>
                <p className="mb-0">
                    Discover your next favourite book with Books Wagon.
                </p>
            </div>

            <br></br>

         
            <div className="d-flex user-dashboard">

             
                <nav
                    className="flex-shrink-0 user-sidebar"
                    style={{ width: "250px", minHeight: "100vh" }}
                >

                    <h3 className="text-white text-center fw-bold py-4">
                <i className="bi bi-book-half me-2"></i>
                  Books Wagon
                    </h3>

                    <ul className="navbar-nav flex-column">

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/uhome"
                            >
                                <i className="bi bi-house-door-fill me-3"></i>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/uviewBooks"
                            >
                                <i className="bi bi-book me-3"></i>
                                View Books
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/cart"
                            >
                                <i className="bi bi-cart3 me-3"></i>
                                My Cart

                                <span className="badge bg-warning text-dark ms-3">
                                    {cartitems && cartitems.length}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/wishlist"
                            >
                                <i className="bi bi-heart me-3"></i>
                                My Wishlist

                                <span className="badge bg-warning text-dark ms-3">
                                    {wishlistitems && wishlistitems.length}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/orders"
                            >
                                <i className="bi bi-box-seam me-3"></i>
                                My Orders

                                <span className="badge bg-warning text-dark ms-3">
                                    {allOrders && allOrders.length}
                                </span>
                            </Link>
                        </li>

                        <li className="nav-item mt-5">
                            <Link
                                className="nav-link text-white px-4 py-3"
                                to="/User/ulogout"
                            >
                                <i className="bi bi-box-arrow-right me-3"></i>
                                Logout
                            </Link>
                        </li>

                    </ul>
                </nav>

               
                <div className="flex-grow-1 p-4 user-content">
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    );
}

export default UserDashboard;