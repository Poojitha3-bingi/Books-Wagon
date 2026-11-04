
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ULogOut() {
    const navigateTo = useNavigate();
    const Username = useRef(null);
    const Password = useRef(null);

    function uLogOut(e) {
        e.preventDefault();

        const username = Username.current.value.trim();
        const password = Password.current.value;
        const loggedInUser = localStorage.getItem("isLoggedIn");

        if (
            username === "Admin" &&
            password === "Admin123" &&
            loggedInUser === "Admin"
        ) {
            localStorage.removeItem("isLoggedIn");
            navigateTo("/");
        } else if (
            username === loggedInUser &&
            loggedInUser !== null &&
            username !== "Admin" &&
            password === username.slice(0, 3) + "123"
        ) {
            localStorage.removeItem("isLoggedIn");
            navigateTo("/");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <div
            className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-4 px-3"
            style={{
                background: "linear-gradient(135deg, #dff7f4, #b2ebe5, #e8f6f5)"
            }}
        >
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">

                    <div
                        className="card border-0 shadow-lg rounded-4 p-3 p-sm-4 p-md-5"
                        style={{ backgroundColor: "#E8F5E9" }}
                    >
                        <h3
                            className="text-center fw-bold mb-2"
                            style={{ color: "#234567" }}
                        >
                            LogOut
                        </h3>

                        <p className="text-center text-secondary mb-4">
                            Enter your logout details
                        </p>

                        <form onSubmit={uLogOut}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    ref={Username}
                                    placeholder="Enter username"
                                    className="form-control form-control-lg"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    ref={Password}
                                    placeholder="Enter password"
                                    className="form-control form-control-lg"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-lg w-100 text-white fw-semibold"
                                style={{ backgroundColor: "#234567" }}
                            >
                                LogOut
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
