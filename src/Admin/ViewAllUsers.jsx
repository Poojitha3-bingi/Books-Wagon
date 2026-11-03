
import { useState } from "react";
import { useSelector } from "react-redux";

function ViewAllUsers() {

    const userList = useSelector(
        (state) => state.user?.userList || []
    );

    const allOrders = useSelector(
        (state) => state.order?.allOrders || []
    );

    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const getUserOrders = (user) => {

        if (!user || !Array.isArray(allOrders)) {
            return [];
        }

        const username = (
            user.username || user.name || ""
        ).trim().toLowerCase();

        return allOrders.filter((order) => {

            return (
                String(order.username || "")
                    .trim()
                    .toLowerCase() === username
            );

        });

    };


    const getTotalSpent = (orders) => {

        return orders.reduce((total, order) => {

            const price = Number(
                String(order.price || 0).replace(/[^\d.-]/g, "")
            );

            const quantity = Number(order.quantity || 1);

            return total + (price * quantity);

        }, 0);

    };


    const formatPrice = (amount) => {

        return Number(amount || 0).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        });

    };


    const filteredUsers = userList.filter((user) => {

        const searchText = search.toLowerCase();

        return (
            (user.username || "").toLowerCase().includes(searchText) ||
            (user.name || "").toLowerCase().includes(searchText) ||
            (user.email || "").toLowerCase().includes(searchText) ||
            String(user.phone || user.mobile || "").includes(searchText)
        );

    });

    return (

        <div className="container-fluid p-3">

            <h2 className="mb-4">All Registered Users</h2>


            <div className="mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search username, email or phone..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

    

            <div className="table-responsive">

                <table className="table table-hover table-bordered align-middle text-center">

                    <thead className="table-dark">

                        <tr>
                            <th>Sl No</th>
                            <th>Username</th>
                            <th>Last Login</th>
                            <th>Total Orders</th>
                            <th>Total Spent</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredUsers.length > 0 ? (

                            filteredUsers.map((user, ind) => {

                                const orders = getUserOrders(user);

                                return (
                                  


                                    <tr key={user.id || user._id || ind}>

                                        <td>{ind + 1}</td>

                                        <td>
                                            {user.username || user.name || "N/A"}
                                        </td>

                                        <td>
                                            {user.lastLogin || "N/A"}
                                        </td>

                                        <td>
                                            {orders.length}
                                        </td>

                                        <td className="fw-bold text-success">
                                            {formatPrice(getTotalSpent(orders))}
                                        </td>

                                        <td>

                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={() => setSelectedUser(user)}
                                            >
                                                View
                                            </button>

                                        </td>

                                    </tr>

                                );

                            })

                        ) : (

                            <tr>
                                <td colSpan="6">
                                    No users found
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

  

            {selectedUser && (

                <div className="card shadow mt-4">

                    <div className="card-header bg-dark text-white d-flex justify-content-between">

                           <h5 className="mb-3">Customer Orders</h5>

                        <button
                            className="btn-close btn-close-white"
                            onClick={() => setSelectedUser(null)}
                        ></button>

                    </div>

                    <div className="card-body">


                    

                        <div className="table-responsive">

                            <table className="table table-hover table-bordered text-center align-middle">

                                <thead className="table-dark">

                                    <tr>
                                        <th>Sl No</th>
                                        <th>Book Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Total</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {getUserOrders(selectedUser).length > 0 ? (

                                        getUserOrders(selectedUser).map((order, ind) => {

                                            const price = Number(
                                                String(order.price || 0)
                                                    .replace(/[^\d.-]/g, "")
                                            );

                                            const quantity = Number(order.quantity || 1);

                                            return (

                                                <tr key={ind}>

                                                    <td>{ind + 1}</td>

                                                    <td>
                                                        {order.title || "N/A"}
                                                    </td>

                                                    <td>
                                                        {formatPrice(price)}
                                                    </td>

                                                    <td>{quantity}</td>

                                                    <td>
                                                        {order.userPhone || "N/A"}
                                                    </td>

                                                    <td>
                                                        {order.userAddress || "N/A"}
                                                    </td>

                                                    <td className="fw-bold text-success">
                                                        {formatPrice(price * quantity)}
                                                    </td>

                                                </tr>

                                            );

                                        })

                                    ) : (

                                        <tr>
                                            <td colSpan="7">
                                                No orders found
                                            </td>
                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                        <h5 className="text-success text-end mt-3">

                            Total Spent: {formatPrice(
                                getTotalSpent(getUserOrders(selectedUser))
                            )}

                        </h5>

                        <button
                            className="btn btn-secondary mt-3"
                            onClick={() => setSelectedUser(null)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}

export default ViewAllUsers;
