
import { useSelector } from "react-redux";
import "./AHome.css";

function AdminHome() {

  
    const bookList = useSelector(
        (state) => state.book?.bookList || []
    );

    const allOrders = useSelector(
        (state) => state.order?.allOrders || []
    );

  
    const userList = useSelector(
        (state) => state.user?.userList || []
    );


    const totalBooks = bookList.length;
    const totalUsers = userList.length;
    const totalOrderItems = allOrders.length;
    const totalSales = allOrders.reduce((total, item) => {

        const price = Number(
            String(item.price || 0).replace(/[^\d.-]/g, "")
        );

        const quantity = Number(item.quantity || 0);

        return total + price * quantity;

    }, 0);


  
    const formatPrice = (amount) => {

        return Number(amount || 0).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        });

    };



    const dashboardData = [

        {
            title: "Total Books",
            count: totalBooks,
            description: "Books available in inventory",
            icon: "bi-book-half",
            color: "books-card"
        },

        {
            title: "Total Users",
            count: totalUsers,
            description: "Registered customers",
            icon: "bi-people-fill",
            color: "users-card"
        },

        {
            title: "Order Items",
            count: totalOrderItems,
            description: "Items recorded in orders",
            icon: "bi-cart-check-fill",
            color: "orders-card"
        },

        {
            title: "Total Order Value",
            count: formatPrice(totalSales),
            description: "Value of recorded order items",
            icon: "bi-currency-rupee",
            color: "sales-card"
        }

    ];



    const recentOrders = [...allOrders].reverse().slice(0, 5);
    const displayBooks = bookList.slice(0, 3);


    return (

        <div className="admin-home">
            <div className="admin-page-heading">
                <h3 className="fw-bold"> Admin Overview</h3>

                <p className="text-muted mb-0"> Here's what's happening in your bookstore today.</p>

            </div>


      

            <div className="row g-4 mt-2">
                {
                dashboardData.map((item, index) => (
                    <div className="col-xl-3 col-md-6" key={index}>
                        <div className={`summary-card ${item.color}`}>
                            <div className="summary-card-content">
                                <div>

                                    <p className="summary-title">{item.title} </p>

                                    <h2> {item.count} </h2>

                                    <small> {item.description} </small>

                                </div>

                                <div className="summary-icon">

                                    <i className={`bi ${item.icon}`}></i>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


    

            <div className="admin-section mt-4">
                <div className="section-heading">
                    <h5 className="fw-bold"> Recent Orders</h5>

                    <span className="text-muted">Recently recorded order items</span>
                </div>

                <div className="table-responsive">
                    <table className="table admin-orders-table">
                        <thead>

                            <tr>
                                <th>S.No</th>
                                <th>Book Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Amount</th>
                            </tr>

                        </thead>
                        <tbody>

                            {recentOrders.length > 0 ? (
                                recentOrders.map((item, index) => {

                                    const price = Number(  String(item.price || 0)  .replace(/[^\d.-]/g, "")  );

                                    const quantity = Number( item.quantity || 0 );

                                    return (

                                        <tr key={item.id || index}>
                                            <td>{index + 1}</td>
                                            <td className="fw-semibold"> {item.title || item.bookName || "N/A"} </td>

                                            <td> {formatPrice(price)} </td>

                                            <td> {quantity} </td>

                                            <td className="fw-semibold"> {formatPrice(price * quantity)}  </td>

                                        </tr>

                                    );

                                })

                            ) : (

                                <tr>
                                    <td colSpan="5" className="text-center py-4">No orders available.</td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>


       

            <div className="admin-section mt-4">
                <div className="section-heading">

                    <h5 className="fw-bold">Books in Store </h5>

                    <span className="text-muted"> Books currently available in your inventory  </span>

                </div>

                <div className="row g-4">
                    {displayBooks.length > 0 ? (
                        displayBooks.map((book) => (

                            <div className="col-xl-4 col-md-6" key={book.id} >

                                <div className="popular-book-card">
                                    <div className="book-image">

                                        <img src={book.img}  alt={book.title}/>

                                    </div>

                                    <div className="book-details">

                                        <h6>{book.title} </h6>

                                        <p> {book.author} </p>

                                 <h5>  {formatPrice( Number(String(book.price || 0) .replace(/[^\d.-]/g, "")) )} </h5>

                                    </div>
                                </div>
                            </div>

                        ))

                    ) : (

                        <div className="col-12 text-center py-4">
                            <p className="text-muted"> No books available in the store. </p>

                        </div>

                    )}

                </div>
            </div>
        </div>
    );
}

export default AdminHome;
