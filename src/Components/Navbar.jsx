import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";


function Navbar(){
    return(
      <div>
         <nav class="navbar navbar-expand-lg nb">
         
             <h1 class="navbar-brand nav-logo">Mane</h1>
             
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto ul-nav">
              <li className="nav-item float-right">
                <Link class="nav-link" to={"/home"}>Home</Link>
              </li>
              {/* <li className="nav-item float-right">
                <a class="nav-link" href="#">Shop</a>
              </li> */}
              <li className="nav-item float-right">
                <Link class="nav-link" to={"/cart"}>Review-Cart</Link>
              </li>
            
              {/* <li className="nav-item float-right">
                <a class="nav-link" href="#">Contact</a>
              </li>  */}
              <li className="nav-item float-right">
                {/* <a class="nav-link" href="#">Logout</a> */}
                <Link to={"/signup"} className="nav-link">Logout</Link>
              </li>
          
           
            </ul>
         
          </div>
       
      </nav>

      </div>


       


    )
}

























export default Navbar;