import { Link, Outlet} from 'react-router-dom';
import './ADashboard.css';
function AdminDashboard(){
return(

    <>

    <div className="container-fluid bg-primary  p-4">

            <h2 className="text-center text-white fw-bold mb-4">
                Welcome to Admin Dashboard
            </h2>

    </div>

    <br></br>

    <div className="d-flex">

      
        <nav className="bg-dark flex-shrink-0 vh-100"
             style={{ width: "250px" }}>

       <ul className="navbar-nav flex-column">

        
            <li className = "nav-item">
                <Link className="nav-link text-white px-5 py-4 rounded" to = "/Admin/ahome">AHome</Link>
            </li>

            <li className = "nav-item">
                <Link  className="nav-link  text-white px-5 py-4 rounded" to="/Admin/amanagecourses">ManageCourses</Link>
            </li>

           
            <li className = "nav-item">
                <Link  className="nav-link  text-white px-5 py-4 rounded" to="/Admin/aaddcourses">AddCourses</Link>
            </li>

             <li className = "nav-item">
                <Link  className="nav-link  text-white px-5 py-4 rounded"  to="/Admin/viewallorders">View All Orders</Link>
            </li>

             <li className = "nav-item">
                <Link  className="nav-link  text-white px-5 py-4 rounded" to = "/Admin/aviewUsers">ViewUsers</Link>
            </li>
            
              <li className = "nav-item">
                <Link  className="nav-link  text-white px-5 py-4 rounded" to = "/Admin/logout">LogOut</Link>
            </li>
 

      
        </ul>

        </nav>

          

    

     <div className="flex-grow-1 p-4">
        <Outlet />
    </div>

    </div>
    </>
)
}
export default AdminDashboard;

           