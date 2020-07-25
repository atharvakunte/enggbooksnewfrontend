import React from 'react';
import{BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/helper/PrivateRoutes';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import AddSubcategory from './admin/AddSubcategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddBook';
import ManageProducts from './admin/ManageBooks';
import UpdateProduct from './admin/UpdateBook';
import UpdateCategory from './admin/UpdateCategory';
import Cart from './core/Cart';


const Routes = () => {
    return (
       <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/signup" exact component={Signup} />
               <Route path="/signin" exact component={Signin} />
               <Route path="/cart" exact component={Cart} />
               <PrivateRoute path="/admin/dashboard" exact component={AdminDashBoard} />
               <PrivateRoute path="/admin/create/category" exact component={AddCategory} />
               <PrivateRoute path="/admin/create/subcategory" exact component={AddSubcategory} />
               <PrivateRoute path="/admin/categories" exact component={ManageCategories} />
               <PrivateRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
               <PrivateRoute path="/admin/create/product" exact component={AddProduct} />
               <PrivateRoute path="/admin/products" exact component={ManageProducts} />
               <PrivateRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
           </Switch>
       </BrowserRouter>
    );
}

export default Routes;