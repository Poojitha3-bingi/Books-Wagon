import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {selecttoupdate,updateNow} from "../BookSlice";
import { useEffect } from "react";
 function Update(){

    const { cid } = useParams();
    var dispatch = useDispatch();
const uProduct = useSelector(
    (state) => state.book.updatedBook
);

  useEffect(() => {
    if (uProduct) {
        setTitle(uProduct.title);
        setAuthor(uProduct.author);
        setImage(uProduct.img);
        setPrice(uProduct.price);
        setDescription(uProduct.description);
        setCategory(uProduct.category);
    }
}, [uProduct]);

useEffect(() => {
    dispatch(selecttoupdate(cid));
}, [dispatch, cid]);
    var [ptitle, setTitle] = useState("");
    var [pauthor, setAuthor] = useState("");
    var [pimg, setImage] = useState(" ");
    var [pprice, setPrice] = useState(" ");
    var [pdescription, setDescription] = useState(" ");
 var [pcategory, setCategory] = useState(" ");
    

function calltoUpdate(e) {
    e.preventDefault();

    var newObj = {
        id: uProduct.id,
        title: ptitle,
        author: pauthor,
        img: pimg,
        price: pprice,
        description: pdescription,
        category: pcategory
    };

    dispatch(updateNow(newObj));

    alert("Book Updated Successfully");
}




    return(
        <>

<div className="container-fluid py-5"
     style={{ backgroundColor: "#F1F5F9", minHeight: "100vh" }}>

    <div className="container">
        <div className="row justify-content-center">

            <div className="col-12 col-md-8 col-lg-6">

                <div className="card border-0 shadow-lg rounded-4 p-4"
                     style={{ backgroundColor: "#F1F8F8" }}>

                    <div className="text-center mb-4">
                        <h2 className="fw-bold" style={{ color: "#087E8B" }}>
                           
                            Update Book
                        </h2>

                        <p className="text-secondary mb-0">
                            Update product details - Book ID: {cid}
                        </p>
                    </div>

                    <form onSubmit={calltoUpdate}>

                        <div className="mb-3">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Title
                            </label>
                            <input
                                type="text"
                                value={ptitle}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control rounded-3 p-2"
                                placeholder="Enter book title"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Author
                            </label>
                            <input
                                type="text"
                                value={pauthor}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="form-control rounded-3 p-2"
                                placeholder="Enter author name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Image
                            </label>
                            <input
                                type="text"
                                value={pimg}
                                onChange={(e) => setImage(e.target.value)}
                                className="form-control rounded-3 p-2"
                                placeholder="Enter image URL"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Price
                            </label>
                            <input
                                type="number"
                                value={pprice}
                                onChange={(e) => setPrice(e.target.value)}
                                className="form-control rounded-3 p-2"
                                placeholder="Enter price"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Description
                            </label>
                            <textarea
                                value={pdescription}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control rounded-3 p-2"
                                rows="3"
                                placeholder="Enter book description"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold"
                                   style={{ color: "#087E8B" }}>
                                Book Category
                            </label>
                            <input
                                type="text"
                                value={pcategory}
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-control rounded-3 p-2"
                                placeholder="Enter category"
                            />
                        </div>

                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn text-white fw-bold rounded-3 py-2"
                                style={{ backgroundColor: "#087E8B" }}>
                                Update Now
                            </button>
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
export default Update;