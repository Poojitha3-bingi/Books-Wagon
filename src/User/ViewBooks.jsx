import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewBooks() {

    const bookList = useSelector((state) => state.book.bookList);

    var [searchParams] = useSearchParams();

    var category = searchParams.get("category") || "";

    var filteredList = bookList.filter((book) => {
        return category === "" || book.category === category;
    });

    const navigate = useNavigate();

    return (
    <div
      style={{ backgroundColor: "#F1F5F9", minHeight: "100vh", padding: "10px" }}>
      <h1 className="fw-bold mb-4"style={{ color: "#087E8B" }}> View Books </h1>

      <div className="row g-4">
        {filteredList.map((book) => (
          <div className="col-12 col-md-6 col-xl-4 d-flex" key={book.id}>

            <button
              type="button" className="w-100 p-0 border-0 bg-transparent text-dark" onClick={() => navigate("/User/detail/" + book.id)}
              style={{
                cursor: "pointer",
                textAlign: "center"
              }} >

              <div
                className="card h-100 shadow rounded-4 overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF, #E0F7F5)",
                  border: "2px solid #05BFA5",
                  transition: "transform 0.2s"
                }}>

              
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "380px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    padding: "5px"
                  }} >
                  <img
                    src={book.img}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                  />
                </div>

           
                <div className="card-body">

                  <h5 className="fw-bold mb-3" style={{ color: "#087E8B" }} > {book.title}</h5>

                  <p className="text-secondary"> Author: {book.author} </p>

                  <p>
                    <strong>Price: </strong>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: "#05A88F",
                        color: "white",
                        fontSize: "14px"
                      }}
                    >
                      ₹{book.price}
                    </span>
                  </p>

                  <p className="text-secondary mb-2"> {book.description} </p>

                  <span className="badge rounded-pill"
                    style={{
                      backgroundColor: "#087E8B",
                      color: "white",
                      padding: "8px 15px"
                    }}    > View Details  </span>

                </div>
              </div>
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBooks;
