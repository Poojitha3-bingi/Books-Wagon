
import "./LandingPage.css";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const [showLogin, setShowLogin] = useState(false);
    const bookList = useSelector((state) => state.book.bookList || []);

    const navigate = useNavigate();

    var Username = useRef(" ");
    var Password = useRef(" ");

    function checkSignIn(e) {
        e.preventDefault();
        const username = Username;
        const password = Password;

        if (username.current.value === "Admin" && password.current.value === "Admin123") {
            alert("Admin Login Success");
            localStorage.setItem("isLoggedIn", username.current.value);
            setShowLogin(false);
            navigate("/Admin/ahome");
        }
        else if (
            username.current.value !== "Admin" &&
            password.current.value === username.current.value.slice(0, 3) + "123"
        ) {
            alert("User Login Success");
            localStorage.setItem("isLoggedIn", username.current.value);
            setShowLogin(false);
            navigate("/User/uhome");
        }
        else {
            alert("Invalid Username or Password");
        }
    }

    return (

        <div className="landing-page">

            <nav className="navbar navbar-expand-lg books-navbar">
                <div className="container">
                    <a className="navbar-brand books-logo" href="/">
                        📚 Books Wagon
                    </a>

                    <div className="collapse navbar-collapse" id="booksNavbar">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">
                                <a className="nav-link navbar-link" href="#popular">
                                    Popular Books
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link navbar-link" href="#about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item ms-lg-3">
                                <button
                                    className="btn signin-btn"
                                    onClick={() => setShowLogin(true)}
                                >
                                    Sign In
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">

                <div
                    id="BooksCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                >

                    <div className="carousel-indicators">

                        <button
                            type="button"
                            data-bs-target="#BooksCarousel"
                            data-bs-slide-to="0"
                            className="active"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#BooksCarousel"
                            data-bs-slide-to="1"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#BooksCarousel"
                            data-bs-slide-to="2"
                        ></button>

                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">

                            <img
                                src="assets/Book1.jpg"
                                className="d-block w-100"
                                alt="Mountain Adventure"
                            />

                            <div className="carousel-caption">
                                <h2>Explore Our Book Collection</h2>
                                <p>Discover amazing books across different genres.</p>
                            </div>

                        </div>

                        <div className="carousel-item">

                            <img
                                src="assets/Book2.jpg"
                                className="d-block w-100"
                                alt="River Adventure"
                            />

                            <div className="carousel-caption">
                                <h2>Discover Your Next Favorite Read</h2>
                                <p>Every book opens the door to a new adventure.</p>
                            </div>

                        </div>

                        <div className="carousel-item">

                            <img
                                src="assets/Book3.jpg"
                                className="d-block w-100"
                                alt="Camping Adventure"
                            />

                            <div className="carousel-caption">
                                <h2>Your Journey Begins with a Book!</h2>
                                <p>Read more, learn more, and grow every day.</p>
                            </div>

                        </div>

                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#BooksCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#BooksCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>
            </div>

            <div className="container py-5" id="popular">

                <h2 className="text-center fw-bold mb-3">
                    Popular Books
                </h2>

                <p className="text-center text-secondary mb-5">
                    Explore our collection and discover your next favorite book.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

                    {bookList.slice(0, 4).map((book) => (

                        <div className="col" key={book.id}>

                            <div className="card h-100 shadow-sm">

                                <img
                                    src={book.img}
                                    className="card-img-top p-3"
                                    alt={book.title}
                                    height="280"
                                />

                                <div className="card-body text-center">

                                    <h5 className="card-title fw-bold">
                                        {book.title}
                                    </h5>

                                    <p className="card-text text-secondary">
                                        {book.author}
                                    </p>

                                    <h5 className="text-success fw-bold">
                                        ₹{book.price}
                                    </h5>

                                    <button
                                        className="btn btn-success mt-2"
                                        onClick={() => setShowLogin(true)}
                                    >
                                        Sign In to Buy
                                    </button>

                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>

            <div className="container py-5" id="about">

                <div
                    className="card shadow-sm border-0 mx-auto"
                    style={{ maxWidth: "1500px" }}
                >

                    <div className="card-body d-flex flex-column flex-md-row align-items-center gap-3 p-4">

                        <div className="text-success fs-1">
                            📚
                        </div>

                        <div>

                            <h2 className="card-title fw-bold text-success mb-2">
                                About Books Wagon
                            </h2>

                            <p className="card-text text-secondary mb-0">
                                Books Wagon is your destination for discovering amazing books.
                                Explore different genres, find your favorite reads, and begin
                                your journey into the world of books.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {showLogin && (

                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.65)",
                        zIndex: 1055
                    }}
                >

                    <div className="modal-dialog modal-dialog-centered">

                        <div
                            className="modal-content border-0 shadow p-4"
                            style={{
                                borderRadius: "12px",
                                backgroundColor: "#F1F5F9"
                            }}
                        >

                            <div className="modal-header border-0">

                                <h3
                                    className="modal-title text-center fw-bold"
                                    style={{ color: "#234567" }}
                                >
                                    Sign In
                                </h3>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowLogin(false)}
                                ></button>

                            </div>

                            <div className="modal-body">

                                <p className="text-center text-secondary mb-4">
                                    Enter your login details
                                </p>

                                <form onSubmit={checkSignIn}>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            ref={Username}
                                            placeholder="username"
                                            className="form-control"
                                            required
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            ref={Password}
                                            placeholder="username"
                                            className="form-control"
                                            required
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 text-white fw-semibold"
                                        style={{ backgroundColor: "#234567" }}
                                    >
                                        Sign In
                                    </button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            )}

            <footer
                className="text-center py-3"
                style={{ backgroundColor: " #A8B99A" }}
            >

                <p className="mb-1 text-white">
                    © 2026 Books Wagon. All Rights Reserved.
                </p>

                <p className="mb-0 text-warning">
                    Your Journey Begins with a Book! 📚
                </p>

            </footer>

        </div>
    );
}

export default LandingPage;
