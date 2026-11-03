
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletefromList } from "../BookSlice";

function ManageBooks() {

    const bookList = useSelector((state) => state.book.bookList);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this book?"
        );

        if (confirmDelete) {
            dispatch(deletefromList(id));
            alert("Book Deleted Successfully!");
        }
    }

    return (

        <div className="container-fluid py-4"
            style={{
                backgroundColor: "#F1F5F9",
                minHeight: "100vh",
                padding: "20px"
            }}  >

            <h1 className="fw-bold mb-4" style={{ color: "#087E8B" }}>  Manage Books </h1>

            <div className="row g-4">
                {bookList.map((book) => (

                    <div className="col-12 col-sm-6 col-lg-4 col-xl-4 d-flex" key={book.id} >

                        <div className="card w-100 shadow rounded-4 overflow-hidden"
                            style={{background: "linear-gradient(180deg, #FFFFFF, #E0F7F5)",
                                border: "2px solid #05BFA5",
                                minWidth: "0"
                            }}
                        >

                            <div className="d-flex justify-content-center align-items-center"
                             style={{  height: "350px", width: "100%", backgroundColor: "#FFFFFF",padding: "10px",flexShrink: 0  }} >
                          
                                <img src={book.img} alt={book.title} style={{  width: "100%",height: "100%", objectFit: "contain"}}/>
                                
                            </div>    
                            

                            <div className="card-body d-flex flex-column">

                                <h5 className="fw-bold mb-3"
                                    style={{
                                        color: "#087E8B",
                                        minHeight: "48px"
                                    }}
                                >
                                    {book.title}
                                </h5>

                                <p className="text-secondary mb-3">
                                    <strong>Author:</strong> {book.author}
                                </p>

                                <p className="mb-3">
                                    <strong>Price:</strong>

                                    <span
                                        className="badge ms-2"
                                        style={{
                                            backgroundColor: "#05A88F",
                                            color: "white",
                                            fontSize: "14px",
                                            padding: "7px 12px"
                                        }}
                                    >
                                        ₹{book.price}
                                    </span>

                                </p>

                                <p
                                    className="text-secondary mb-3"
                                    style={{
                                        minHeight: "55px"
                                    }}
                                >
                                    {book.description}
                                </p>

                                <div className="mt-auto">

                                    <span
                                        className="badge rounded-pill"
                                        style={{
                                            backgroundColor: "#087E8B",
                                            color: "white",
                                            padding: "8px 15px"
                                        }}
                                    >
                                        {book.category}
                                    </span>

                                </div>

                            </div>


                     

                            <div
                                className="card-footer d-flex gap-2 p-3 border-0"
                                style={{
                                    backgroundColor: "#E0F7F5"
                                }}
                            >

                                <button
                                    className="btn btn-warning flex-fill fw-semibold"
                                    onClick={() =>
                                        navigate("/Admin/Update/" + book.id)
                                    }
                                >
                                    <i className="bi bi-pencil-square me-1"></i>
                                    Update
                                </button>

                               <button
    className="btn btn-danger flex-fill fw-semibold"
    onClick={() => handleDelete(book.id)}
>
    <i className="bi bi-trash me-1"></i>
    Delete
</button>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default ManageBooks;
