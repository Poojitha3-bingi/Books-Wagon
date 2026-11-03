
import { Link } from "react-router-dom";
import "./UHome.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLoggedInUser } from "../UserSlice";

function UHome() {

    const dispatch = useDispatch();

    useEffect(() => {
        const username = localStorage.getItem("isLoggedIn");

        if (!username || username === "Admin") {
            return;
        }

    
        let loggedInUsers = [];

        try {
            loggedInUsers = JSON.parse(
                localStorage.getItem("loggedInUsers") || "[]"
            );

            if (!Array.isArray(loggedInUsers)) {
                loggedInUsers = [];
            }
        } catch (error) {
            loggedInUsers = [];
        }

    
        const user = {
            username: username,
            lastLogin: new Date().toLocaleString()
        };

        const existingIndex = loggedInUsers.findIndex(
            (item) =>
                item.username?.toLowerCase() === username.toLowerCase()
        );

        if (existingIndex === -1) {
            loggedInUsers.push(user);
        } else {
            loggedInUsers[existingIndex] = user;
        }


        localStorage.setItem(
            "loggedInUsers",
            JSON.stringify(loggedInUsers)
        );


        dispatch(addLoggedInUser(user));


        console.log("Logged-in user:", user);
        console.log("All logged-in users:", loggedInUsers);

    }, [dispatch]);

    return (

        <div className="user-container">
            <div className="card home-banner border-0 shadow-sm mb-4">
                <div className="card-body p-4">

                    <h1 className="card-title fw-bold">
                        Find Your Next Great Book
                    </h1>

                    <p className="card-text">
                        Explore amazing books and discover
                        stories that inspire you.
                    </p>

                    <Link to="/User/uviewBooks" className="btn explore-btn">
                        Explore Books
                    </Link>

                </div>
            </div>

            <h2 className="home-title">Browse by Genres</h2>

            <div className="row g-3">

                <div className="col-md-4 col-lg-2 col-6">
                    <Link to="/User/uviewBooks?category=Fiction" className="text-decoration-none">
                        <div className="home-category fiction">
                            <i className="bi bi-book-half"></i>
                            <h5>Fiction</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 col-lg-2 col-6">
                    <Link to="/User/uviewBooks?category=Science" className="text-decoration-none">
                        <div className="home-category science">
                            <i className="bi bi-rocket-takeoff"></i>
                            <h5>Science</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 col-lg-2 col-6">
                    <Link to="/User/uviewBooks?category=Novels" className="text-decoration-none">
                        <div className="home-category novels">
                            <i className="bi bi-journal-bookmark"></i>
                            <h5>Novels</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 col-lg-2 col-6">
                    <Link to="/User/uviewBooks?category=Biography" className="text-decoration-none">
                        <div className="home-category biography">
                            <i className="bi bi-person-lines-fill"></i>
                            <h5>Biography</h5>
                        </div>
                    </Link>
                </div>

                <div className="col-md-4 col-lg-2 col-6">
                    <Link to="/User/uviewBooks?category=Programming" className="text-decoration-none">
                        <div className="home-category programming">
                            <i className="bi bi-code-slash"></i>
                            <h5>Programming</h5>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default UHome;
