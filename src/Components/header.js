import 'react-bootstrap'
import React from "react";
import ReactDOM from "react-dom";
import Test from "./Test";
import {
    BrowserRouter as Router, Link,
    Switch,
    useLocation,
    Route, Redirect
} from "react-router-dom";
import About from "./about";
function Header() {
  return (
             <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">

              <h1 className="logo me-auto"><a href="/">Mentor</a></h1>

              <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>


                      <nav id="navbar" className="navbar order-last order-lg-0">
                          <ul>
                              <li><a className="active" href="/">Home</a></li>

                             <li><Link to = {{pathname: `/about`, fromDashboard: false}} >About</Link></li>


                            <li><Link to = {{pathname: `/events`, fromDashboard: false}} >Courses</Link></li>
                            <li><Link to = {{pathname: `/treners`, fromDashboard: false}} >Trainers</Link></li>
                            <li><Link to = {{pathname: `/contacts`, fromDashboard: false}} >Contacts</Link></li>
                            <li><Link to = {{pathname: `/forms`, fromDashboard: false}} >Pricing</Link></li>
                          </ul>
                      </nav>


                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>


              <a href="courses.html" className="get-started-btn">Get Started</a>

          </div>
      </header>
  );
}

export default Header;
