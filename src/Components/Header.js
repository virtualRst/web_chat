import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1>EdithIndia</h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/">Blog</Link></li>
          <li class="dropdown"><a href="category"><span>Categories</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="/category/business">Business</a></li>
              <li><a href="/category/culture">Culture</a></li>
              <li><a href="/category/lifestyle">Lifestyle</a></li>
              <li><a href="/category/Technical">Technical</a></li>
            </ul>
          </li>
          {/* <li><Link to="whats-new">What's New</Link></li> */}
          {/* <li><Link to="/about">About us</Link></li> */}
          {/* <li><Link to="/contact">Contact us</Link></li> */}
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

      <div className="position-relative">
        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
        <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
        <a href="https://www.instagram.com/its_edithindia/" className="mx-2"><span className="bi-instagram"></span></a>
        <a href="#" className="mx-2 js-search-open" style={{'display':'none'}}><span className="bi-search"></span></a>
        <i className="bi bi-list mobile-nav-toggle"></i>

        {/* <!-- ======= Search Form ======= --> */}
        <div className="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" className="search-form">
            <span className="icon bi-search"></span>
            <input type="text" placeholder="Search" className="form-control" />
            <button className="btn js-search-close"><span className="bi-x"></span></button>
          </form>
        </div>
        {/* <!-- End Search Form --> */}

      </div>

    </div>

  </header>
  )
}
