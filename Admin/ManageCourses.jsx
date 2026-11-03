
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function ManageCourses() {


var navigate = useNavigate();

var clist = useSelector((state)=>state.course.coursesList);
console.log(clist);



return(
  <>
  <h1>Manage Courses</h1>
 <div className="row g-4">
  {clist.map((cro, ind) => (
    <div className="col-md-4 d-flex" key={ind}>
      <button
        type="button"
        className="btn p-0 border-0 bg-transparent w-100 h-100 text-dark"
        onClick={() => navigate("/user/detail/" + cro.id)}
      >
        <div className="card h-100 shadow-sm rounded-3 overflow-hidden">
          <img
            src={cro.img}
            className="card-img-top"
            alt={cro.title}
            height="220"
            style={{ objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title fw-bold">
              {cro.title}
            </h5>

            <p className="card-text text-secondary">
              Duration: {cro.duration}
            </p>

            <p className="card-text">
              Price:{" "}
              <span className="badge bg-success">
                ₹{cro.price}
              </span>
            </p>
          </div>
        </div>
      </button>
    </div>
  ))}
</div>
  </>

)
}
export default ManageCourses;








 

