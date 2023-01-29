import React from 'react'
// import { NavLink } from "react-router-dom"
import '../Topnav/Topnav.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Topnav = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
    
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="navbar-nav me-auto mb-2 mb-lg-0">

            </div>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>

          </div>

        </div>
      </nav>

    </>
  )
}

export default Topnav;