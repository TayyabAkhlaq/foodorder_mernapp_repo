import React from "react";
import { Link,useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handlefun = () =>
  {
    localStorage.removeItem("authToken");
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" href="#">
            GOFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <Link className="nav-link active fs-5" aria-current="page" to="/"> MyOrders</Link>
              :""}
            </ul>
            {(!localStorage.getItem("authToken"))?
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
            
              
                <Link className="btn bg-white text-success mx-1" to="/createuser">
                  SignUp
                </Link>
                </div>
                :<div>
                <div className="btn bg-white text-success mx-1" >
                 MY CART
                </div>
                <div className="btn bg-white text-success mx-1" onClick={handlefun}>
                 LOGOUT
                </div>
                </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
