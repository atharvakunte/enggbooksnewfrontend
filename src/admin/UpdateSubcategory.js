import React, {useState, useEffect} from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import {getCategory, updateCategory} from './helper/adminapicall'

const UpdateSubcategory = ({match}) => {

    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user, token} = isAuthenticated();

    const successMessage = () => {
        if(success) {
            return <h4 className="alert alert-success mt-3">Category Updated Successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="alert alert-danger mt-3">Category could not be updated</h4>
        }
    }

    const myCategoryForm = () => ( 
        <form>
             <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input type="text" className="form-control my-3" onChange={handleChange} value={name} autoFocus required placeholder={name}/>
                    <button onClick={onSubmit} className="btn  btn-outline-success rounded">Update Category</button>
                </div>
            </form>
            
        );

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3 rounded" to="/admin/dashboard">Back</Link>
        </div>
    );
    
    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
          //console.log(data);
          if (data.err) {
            setError(data.err);
          } else {
            setName(data.name);
          }
        });
      };



    useEffect(() => {
        preload(match.params.categoryId);
      }, []);

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        //Backend request fired
       updateCategory(match.params.categoryId, user._id, token, {name})
        .then (data => {
            if(data.err) {
                setError(true);
            }else{
                setError("");
                setSuccess(true);
                setName("");
            }
        })
        .catch (err => console.log(err))
    };

    return(
        <Base title="Update Category" description="Update existing category\ies in your store" className="container bg-success p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {goBack()}
                    {myCategoryForm()}
                </div>
            </div>
        </Base>
        )
}


export default UpdateSubcategory;