import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method:'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// get all categories

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method:"GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

//get a category

export const getCategory = (categoryId) => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}


//delete category

export const deleteCategory = (categoryId, userId, token) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
        Accept:"application/json",
        Authorization: `Bearer ${token}`
    }
  })
}

//update category

export const updateCategory = (categoryId, userId, token, category) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method:'PUT',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// Subcategory Calls

export const createSubcategory = (userId, token, subcategory) => {
  return fetch(`${API}/subcategory/create/${userId}`, {
    method:'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(subcategory)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// get all subcategories

export const getSubcategories = (categoryId) => {
  return fetch(`${API}/subcategories/${categoryId}`, {
    method:"GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

//get a subcategory

export const getSubcategory = (subcategoryId) => {
  return fetch(`${API}//subcategory/${subcategoryId}`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}


//delete subcategory

export const deleteSubcategory = (subcategoryId, userId, token) => {
  return fetch(`${API}/category/${subcategoryId}/${userId}`, {
    method: "DELETE",
    headers: {
        Accept:"application/json",
        Authorization: `Bearer ${token}`
    }
  })
}

//update subcategory

export const updateSubcategory = (subcategoryId, userId, token, subcategory) => {
  return fetch(`${API}/subcategory/${subcategoryId}/${userId}`, {
    method:'PUT',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(subcategory)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


// product calls


//create product
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
     headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`},
      body: product
  })
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}

//get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method:"GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}


// delete a product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
     headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`}
  })
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}

//get a product
export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

//update a product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "PUT",
     headers:{
        Accept:"application/json",
        Authorization: `Bearer ${token}`},
      body: product
  })
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}