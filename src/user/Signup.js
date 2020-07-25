import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { signup } from '../auth/helper';

const Signup = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success: false
    });

    const {name, email, password, error, success} = values
    
    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error:false})
        signup({name, email, password})
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, success: false});
            }else{
                setValues({
                    ...values, 
                    name: "",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        })
        .catch(console.log("error in signup"))
    }

const signUpForm = () => {
    return(
        <div>
        <h3 className="text-center p-4 mb-5">Admin Sign Up</h3>
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-dark">Name</label>
                        <input className="form-control" onChange={handleChange("name")} type="text"  />
                    </div>
                    <div className="form-group">
                        <label className="text-dark">Email</label>
                        <input className="form-control" onChange={handleChange("email")} type="email" />
                    </div>
                    <div className="form-group">
                        <label className="text-dark">Password</label>
                        <input className="form-control" onChange={handleChange("password")} type="password" />
                    </div>
                    <button onClick={onSubmit} className="btn btn-dark btn-block">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
    )
}

const successMessage = () => {
    return(
 <div className="row">
 <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-success" style={{display: success ? "" : "none"}}>
        New Account was created successfully. Please{" "} 
        <Link to="/signin">Login Here</Link>
    </div>
</div>
</div>
    )
}

const errorMessage = () => {
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
       {error}
    </div>
    </div>
    </div>
    )
}

    return (
        <Base>
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    )
}


export default Signup;
