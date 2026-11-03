import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addtoList } from '../BookSlice';

export default function AddBooks(){
    
      var[cid, setCid] = useState(" ");
      var[ctitle, setTitle] = useState(" ");
      var[cimg, setImg] = useState(" ");
      var[cauthor, setAuthor] = useState(" ");
         var[ccategory, setCategory] = useState(" ");
       var[cdescription, setDescription] = useState(" ");
      var[cprice, setPrice] = useState(" ");

      const navigate = useNavigate();

      var dispatch = useDispatch();
      var addNow = (e)=>{
        e.preventDefault();

        var newobj = {
        id: cid,
        title: ctitle ,
        img: cimg,
        author: cauthor ,
        category:ccategory,
        description:cdescription,
        price: cprice 
        }

        dispatch(addtoList(newobj));
        alert("book added")

      }


    return(
        <>

       <div className="container mt-5 mb-5">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-7">

      <div className="card shadow-lg border-0 rounded-4">

        <div
          className="card-header text-white text-center py-4 rounded-top-4"
          style={{
            background: "linear-gradient(100deg, #087E8B, #05BFA5, #00C9D8)"
          }} >


          <h3 className="fw-bold mb-1">Add New Book</h3>
          <p className="mb-0">Enter the book details below</p>
        </div>

        <div className="card-body p-4 p-md-5">

          <form action=" " onSubmit={addNow}>

            <div className="form-group mb-3">
              <label htmlFor="Cid" className="form-label fw-semibold">Book ID</label>
              <input type="text" className="form-control form-control-lg"  onChange={(e) => setCid(e.target.value)} required />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="ctitle" className="form-label fw-semibold">Book Title </label>
              <input type="text" className="form-control form-control-lg"  onChange={(e) => setTitle(e.target.value)} required/>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cimg" className="form-label fw-semibold">Book Image</label>
              <input type="text" className="form-control form-control-lg"  onChange={(e) => setImg(e.target.value)} required/>
            </div>

             <div className="form-group mb-3">
              <label htmlFor="cimg" className="form-label fw-semibold">Book Author</label>
              <input type="text" className="form-control form-control-lg" onChange={(e) => setAuthor(e.target.value)} required/>
            </div>

             <div className="form-group mb-3">
              <label htmlFor="cimg" className="form-label fw-semibold">Book Category</label>
              <input type="text" className="form-control form-control-lg" onChange={(e) => setCategory(e.target.value)} required/>
            </div>

             <div className="form-group mb-3">
              <label htmlFor="cimg" className="form-label fw-semibold">Book Description</label>
              <input type="text" className="form-control form-control-lg"  onChange={(e) => setDescription(e.target.value)} required/>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cimg" className="form-label fw-semibold">Book Price</label>
              <input type="text" className="form-control form-control-lg"  onChange={(e) => setPrice(e.target.value)} required/>
            </div>

            <div className="d-flex gap-3 justify-content-center">

              <button type="submit" className="btn btn-lg text-white px-4 fw-semibold"
                style={{
                  background: "linear-gradient(100deg, #087E8B, #05BFA5)",
                  border: "none"
                }}> Add Book
              </button>

              <button
                type="reset"className="btn btn-lg btn-outline-danger px-4 fw-semibold">Cancel</button>

            </div>
          </form>

        </div>
      </div>

    </div>
  </div>
</div>
</>
    )
}
