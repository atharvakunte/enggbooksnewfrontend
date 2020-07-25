import React, {useState, useEffect} from 'react';
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { isAuthenticated } from '../auth/helper';
import { getCategories, deleteProduct, deleteCategory } from './helper/adminapicall';

const ManageCategories = () => {


    const [categories, setCategories] = useState([])

    const {user, token} = isAuthenticated();

    const preload = () => {
        getCategories().then(data => {
            if(data.err) {
                console.log(data.err);
            }else{
                setCategories(data);
            }
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        preload();
    }, [])

    const deletethisCategory = categoryId => {
      deleteCategory(categoryId, user._id, token).then(data => {
        if (data.error) {
          console.log(data.err);
        }else {
          preload();
        }
      } )
    }

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3 rounded" to="/admin/dashboard">Back</Link>
        </div>
    );

    return(
        <Base title="Manage Categories" description="Edit or Delete categories here">
       {goBack()}
      <div className="row bg-white rounded">
      <h2 className="mb-4 mt-3 ml-3 text-dark">All categories:</h2>
        <div className="col-12">
          <h2 className="text-center text-white my-3"></h2>

          {categories.map((category, index) => {
           return( 
            <div key={index} className="row text-center mb-2 ">
            <div className="col-4">
              <h3 className="text-dark text-left">{index+1}) {category.name}</h3>
            </div>
            <div className="col-4">
              <Link
                className="btn btn-outline-success rounded"
                to={`/admin/category/update/${category._id}`}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-4">
              <button onClick={() => {
                deletethisCategory(category._id);
              }} className="btn btn-outline-danger rounded">
                Delete
              </button>
            </div>
          </div>
          )
          })}
        </div>
      </div>
    </Base>
    )
}



export default ManageCategories;