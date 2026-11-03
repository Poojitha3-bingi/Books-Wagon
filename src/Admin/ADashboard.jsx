import { Link, Outlet} from 'react-router-dom';
import './ADashboard.css';
function AdminDashboard(){
return(

    <>

    
            <div className="container-fluid p-4 user-header">
                <h2 className="fw-bold mb-2"> Welcome Back, Admin! </h2>

                <h5 className="fw-semibold mb-2">Manage Your Bookstore Efficiently</h5>

                <p className="mb-0"> Monitor your books, manage customers, track orders,
                    and keep your bookstore running smoothly.
                </p>

            </div>

            <br></br>

            <div className="d-flex user-dashboard">

           
                <nav className="flex-shrink-0 user-sidebar" style={{ width: "250px", minHeight: "100vh" }} >

                 <h3 className="text-white text-center fw-bold py-4">
                        <i className="bi bi-book-half me-2"></i>
                        Books Wagon
                    </h3>

                    <ul className="navbar-nav flex-column">

                     
                <li className="nav-item">
                 <Link className="nav-link text-white px-4 py-3"to="/Admin/ahome"> <i className="bi bi-house-door-fill me-3"></i>Admin Home
                            </Link>
                        </li>

                 
                        <li className="nav-item">
                            <Link className="nav-link text-white px-4 py-3" to="/Admin/amanagebooks">
                                <i className="bi bi-book-half me-3"></i>
                                Manage Books
                            </Link>
                        </li>

                    
                        <li className="nav-item">
                            <Link className="nav-link text-white px-4 py-3" to="/Admin/aaddbooks">
                                <i className="bi bi-plus-circle-fill me-3"></i>
                                Add Books
                            </Link>
                        </li>

                   
                        <li className="nav-item">
                            <Link className="nav-link text-white px-4 py-3" to="/Admin/viewallusers">
                                <i className="bi bi-people-fill me-3"></i>
                                ViewAllUsers
                            </Link>
                        </li>

                   
                        <li className="nav-item">
                            <Link className="nav-link text-white px-4 py-3" to="/Admin/viewallorders">
                                <i className="bi bi-cart-check-fill me-3"></i>
                                ViewAllOrders
                            </Link>
                        </li>


                  
                        <li className="nav-item mt-5">
                            <Link className="nav-link text-white px-4 py-3" to="/Admin/logout">
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
)
}
export default AdminDashboard;

           