import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addtoList } from '../CourseSlice';

export default function AddCourses(){
    
      var[cid, setCid] = useState(" ");
      var[ctitle, setTitle] = useState(" ");
      var[cimg, setImg] = useState(" ");
      var[cduration, setDuration] = useState(" ");
      var[cprice, setPrice] = useState(" ");

      const navigate = useNavigate();

      var dispatch = useDispatch();
      var addNow = (e)=>{
        e.preventDefault();

        var newobj = {
        id: cid,
        title: ctitle ,
        img: cimg,
        duration: cduration ,
        price: cprice 
        }

        dispatch(addtoList(newobj));
        alert("course added")

      }


    return(
        <>

        <form action = " " onSubmit = {addNow}>
            <div className = "form-group">
                <label htmlFor = "Cid" className = "form-label">Course id</label>
                <input type = "text" className = "form-control"  onChange={(e) => setCid(e.target.value)}/>
            </div>


             <div className = "form-group">
                <label htmlFor = "ctitle" className = "form-label"> Course title</label>
                <input type = "text" className = "form-control"  onChange = {(e)=>setTitle(e.target.value)}/>
            </div>

             <div className = "form-group">
                <label htmlFor = "cimg" className = "form-label">Course img</label>
                <input type = "text" className = "form-control"   onChange = {(e)=>setImg(e.target.value)}/>
            </div>

             <div className = "form-group">
                <label htmlFor = "cduration" className = "form-label">Course duration</label>
                <input type = "text" className = "form-control"   onChange = {(e)=>setDuration(e.target.value)}/>
            </div>

             <div className = "form-group">
                <label htmlFor = "cprice" className = "form-label">Course price</label>
                <input type = "text" className = "form-control"   onChange = {(e)=>setPrice(e.target.value)}/>
            </div>

           

            <div className = "form-group">
                <button   onClick={() => navigate("/Admin/amanagecourses")} type = "submit" className = "btn btn-primary">Add Course</button>
                
                <button type = "reset" className = "btn btn-danger">Cancel Course</button>
            </div>


        </form>
        </>
    )
}
