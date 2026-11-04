
import "./LandingPage.css";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const [showLogin, setShowLogin] = useState(false);

    const bookList = useSelector(
        (state) => state.book.bookList || []
    );

    const navigate = useNavigate();

    const Username = useRef(null);
    const Password = useRef(null);

    // Close mobile navbar
    function closeNavbar() {
        const navbar = document.getElementById("booksNavbar");

        if (navbar && navbar.classList.contains("show")) {
            navbar.classList.remove("show");
        }
    }

    // Close login modal and clear inputs
    function closeLogin() {
        setShowLogin(false);

        if (Username.current) Username.current.value = "";
        if (Password.current) Password.current.value = "";
    }

    // Login validation
    function checkSignIn(e) {
        e.preventDefault();

        const username = Username.current.value.trim();
        const password = Password.current.value;

        if (username === "Admin" && password === "Admin123") {

            alert("Admin Login Success");

            localStorage.setItem("isLoggedIn", username);

            closeLogin();

            navigate("/Admin/ahome");

        }
        else if (
            username !== "Admin" &&
            username.length >= 3 &&
            password === username.slice(0, 3) + "123"
        ) {

            alert("User Login Success");

            localStorage.setItem("isLoggedIn", username);

            closeLogin();

            navigate("/User/uhome");

        }
        else {

            alert("Invalid Username or Password");

        }
    }

    return (

        <div className="landing-page">

            {/* NAVBAR */}

            <nav className="navbar navbar-expand-lg navbar-light books-navbar">

                <div className="container">

                    <a className="navbar-brand books-logo" href="/">
                        📚 Books Wagon
                    </a>

                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#booksNavbar"
                        aria-controls="booksNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NAVBAR MENU */}

                    <div
                        className="collapse navbar-collapse"
                        id="booksNavbar"
                    >

                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            {/* POPULAR BOOKS */}

                            <li className="nav-item">

                                <a
                                    className="nav-link navbar-link"
                                    href="#popular"
                                    onClick={closeNavbar}
                                >
                                    Popular Books
                                </a>

                            </li>

                            {/* ABOUT */}

                            <li className="nav-item">

                                <a
                                    className="nav-link navbar-link"
                                    href="#about"
                                    onClick={closeNavbar}
                                >
                                    About
                                </a>

                            </li>

                            {/* SIGN IN */}

                            <li className="nav-item ms-lg-3">

                                <button
                                    className="btn signin-btn"
                                    onClick={() => {
                                        closeNavbar();
                                        setShowLogin(true);
                                    }}
                                >
                                    Sign In
                                </button>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>


            {/* BOOKS CAROUSEL */}

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
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#BooksCarousel"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>

                        <button
                            type="button"
                            data-bs-target="#BooksCarousel"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>

                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">

                            <img
                                src="/assets/Book1.jpg"
                                className="d-block w-100"
                                alt="Book Collection"
                            />

                            <div className="carousel-caption">

                                <h2>Explore Our Book Collection</h2>

                                <p>
                                    Discover amazing books across different genres.
                                </p>

                            </div>

                        </div>


                        <div className="carousel-item">

                            <img
                                src="/assets/Book2.jpg"
                                className="d-block w-100"
                                alt="Discover Books"
                            />

                            <div className="carousel-caption">

                                <h2>Discover Your Next Favorite Read</h2>

                                <p>
                                    Every book opens the door to a new adventure.
                                </p>

                            </div>

                        </div>


                        <div className="carousel-item">

                            <img
                                src="/assets/Book3.jpg"
                                className="d-block w-100"
                                alt="Reading Journey"
                            />

                            <div className="carousel-caption">

                                <h2>Your Journey Begins with a Book!</h2>

                                <p>
                                    Read more, learn more, and grow every day.
                                </p>

                            </div>

                        </div>

                    </div>


                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#BooksCarousel"
                        data-bs-slide="prev"
                        aria-label="Previous slide"
                    >

                        <span className="carousel-control-prev-icon"></span>

                    </button>


                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#BooksCarousel"
                        data-bs-slide="next"
                        aria-label="Next slide"
                    >

                        <span className="carousel-control-next-icon"></span>

                    </button>

                </div>

            </div>


            {/* POPULAR BOOKS SECTION */}

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


            {/* ABOUT SECTION */}

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


            {/* LOGIN MODAL */}

            {showLogin && (

                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="loginTitle"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.65)",
                        zIndex: 1055
                    }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeLogin();
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
                                    id="loginTitle"
                                    className="modal-title text-center fw-bold"
                                    style={{ color: "#234567" }}
                                >
                                    Sign In
                                </h3>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeLogin}
                                    aria-label="Close"
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
                                            autoComplete="username"
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
                                            placeholder="password"
                                            className="form-control"
                                            autoComplete="current-password"
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


            {/* FOOTER */}

            <footer
                className="text-center py-3"
                style={{ backgroundColor: "#A8B99A" }}
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
