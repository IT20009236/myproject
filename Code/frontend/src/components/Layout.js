import React from "react";
import  '../css/Navbar.css';

import { Outlet,Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="container">
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/contact">Contact</Link>

        </li>
        <li class="nav-item">
        <Link to="/blogs">Blogs</Link>
         
        </li>
        <li class="nav-item">
        <Link to="/">Home</Link>
        
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Enter registration number" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">View profile</button>
      </form>
    </div>
  </div>
  
  </nav>
   </div>
      <Outlet />
    </>
  )
};

export default Layout;
