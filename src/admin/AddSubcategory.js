import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { getCategories, createSubcategory } from "./helper/adminapicall";

const AddSubcategory = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const successMessage = () => {
    if (success) {
      return (
        <h4 className="alert alert-success mt-3">
          Subcategory Created Successfully
        </h4>
      );
    }
  };

  const warningMessage = () => {
    if (error) {
      return (
        <h4 className="alert alert-danger mt-3">
          Subcategory could not be created
        </h4>
      );
    }
  };

  const preload = () => {
    getCategories().then((data) => {
      //console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Subcategory</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For ex. Summer"
        />
        <select
          onChange={handleCategory}
          className="form-control mb-3"
          placeholder="Category"
        >
          <option>Select Category</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
        <button onClick={onSubmit} className="btn btn-outline-dark rounded">
          Create Subcategory
        </button>
      </div>
    </form>
  );

  const goBack = () => (
    <div className="mt-5">
      <Link
        className="btn btn-sm btn-dark mb-3 rounded"
        to="/admin/dashboard"
      >
        Back
      </Link>
    </div>
  );

  const handleCategory = (event) => {
    setError("");
    setCategory(event.target.value);
  };

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);

    //Backend request fired
    createSubcategory(user._id, token, { name, category })
      .then((data) => {
        if (data.err) {
          setError(true);
        } else {
          setError("");
          setSuccess(true);
          setName("");
          setCategory("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Base
      className="container p-4 mb-5"
    >
        <div>
        <h3 className="text-center p-4 text-dark">Create Subcategory</h3>
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
  );
};

export default AddSubcategory;
