import React, {useState} from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import {createCategory} from './helper/adminapicall'

const AddCategory = () => {

    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user, token} = isAuthenticated();

    const successMessage = () => {
        if(success) {
            return <h4 className="alert alert-success mt-3">Category Created Successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="alert alert-danger mt-3">Category could not be created</h4>
        }
    }

    const myCategoryForm = () => ( 
        <form>
             <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input type="text" className="form-control my-3" onChange={handleChange} value={name} autoFocus required placeholder="For ex. Summer"/>
                    <button onClick={onSubmit} className="btn btn-outline-dark rounded">Create Category</button>
                </div>
            </form>
            
        );

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-dark mb-3 rounded" to="/admin/dashboard">Back</Link>
        </div>
    );

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        //Backend request fired
        createCategory(user._id, token, {name})
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
        <Base className="container p-4 mb-5">
            <div>
            <h3 className="text-center mb-5">Create Category</h3>
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {goBack()}
                    {myCategoryForm()}
                </div>
            </div>
            </div>
        </Base>
        )
}


export default AddCategory;
