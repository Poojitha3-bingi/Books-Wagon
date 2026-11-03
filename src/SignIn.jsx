import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';
export default function  SignIn(){


    

    var navigate = useNavigate();
    var Username = useRef(" ");
    var Password = useRef(" ");


    function checkSignIn(e){
        e.preventDefault();
             const username = Username
            const password = Password

            if (username.current.value === "Admin" && password.current.value === "Admin123") {
            alert("Admin Login Success");
            localStorage.setItem("isLoggedIn", username.current.value);
            navigate("/Admin/ahome");
        }
        else if (
    username.current.value!== "Admin" &&
   
    password.current.value === username.current.value.slice(0, 3) + "123"
) {
    alert("User Login Success");
    localStorage.setItem("isLoggedIn", username.current.value);
    navigate("/user/uhome");
}
else {
    alert("Invalid Username or Password");
}
    }
        
    return(
        <>
    <div className="container-fluid w-100 min-vh-100 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#6366A1" }} >
        <div className="card border-0 shadow p-4"
            style={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "12px",
                backgroundColor:"#F1F5F9"
            }}>

    <h3 className="text-center fw-bold mb-2" style={{ color: "#234567" }}>Sign In </h3>

    <p className="text-center text-secondary mb-4">Enter your login details </p>

         <form onSubmit={checkSignIn}>

            <div className="mb-3">
            <label className="form-label">Username</label>
            <input type = "text" ref = {Username} placeholder = "username" className = "form-control" required/>
            </div>
     
          <div className="mb-4">
           <label className="form-label">Password</label>
          <input type="password" ref={Password} placeholder="Password" className = "form-control" required />
          </div>

 <button type="submit" className="btn w-100 text-white fw-semibold"style={{ backgroundColor: "#234567" }}>Sign In</button>
        
       </form>

     </div>
     </div>


        </>
    );
}