import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function  LogOut(){



    var navigateto = useNavigate();
    var Username = useRef(" ");
    var Password = useRef(" ");

  
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
        navigateto("/");
    }

    
    else if (
        username === loggedInUser &&
        loggedInUser !== null &&
        username !== "Admin" &&
        password === username.slice(0, 3) + "123"
    ) {
        localStorage.removeItem("isLoggedIn");
        navigateto("/");
    }

    
    else {
        alert("Invalid username or password");
    }
}



            return(
              
        <>

       <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
                style={{background: "linear-gradient(135deg, #dff7f4, #b2ebe5, #e8f6f5)", padding: "30px"}} >
        <div className="card border-0 shadow p-4"
            style={{
                width: "100%",
                maxWidth: "380px",
                borderRadius: "12px",
               backgroundColor: "#E8F5E9"
            }}>

    <h3 className="text-center fw-bold mb-2" style={{ color: "#234567" }}>LogOut </h3>

    <p className="text-center text-secondary mb-4">Enter your logout details </p>

         <form onSubmit={ uLogOut}>

            <div className="mb-3">
            <label className="form-label">Username</label>
            <input type = "text" ref = {Username} placeholder = "username" className = "form-control" required/>
            </div>
     
          <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" ref={Password} placeholder="Password" className = "form-control" required />
          </div>

   <button type="submit" className="btn w-100 text-white fw-semibold"style={{ backgroundColor: "#234567" }}>LogOut</button>
        
       </form>
     </div>
     </div>


      </>

         )
        }






 


 