import React from 'react';
import Menu from "./Menu";

 const Base = ({
     className="text-dark p-4",
     children
 }) => {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
        <div className={className}>{children}</div>
      </div>
      <footer>
        <div className="bg-dark text-light text-center">
          <div className="p-4">
            <small>&copy; Copyright 2020, EnggBooks</small>
          </div>
        </div>
      </footer>
    </div>
    )
}


export default Base;