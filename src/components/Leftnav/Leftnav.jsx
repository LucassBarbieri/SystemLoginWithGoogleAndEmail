import React from 'react'
import '../Leftnav/Leftnav.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import img from './img/logito.png'

export const Leftnav = () => {
  return (
    <>
      <div className="offcanvas offcanvas-start" data-bs-scroll="false" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><img src={img} alt="Logo" height="50" width="40"/></h5>
          <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-three-dots-vertical"></i></button>
        </div>

        <div className="offcanvas-body">

          <div className='hrContainer'>
            <hr className='hr' />
          </div>

          <div className="col">
            <div className="profileCard card border-0 shadow-none">
              <div className="card-body text-center d-flex flex-column align-items-center p-0">
                <img className="rounded-circle mb-3 fit-cover imgProfile" src={localStorage.getItem('photoPic')} alt="" />
                <h5 className="fw-bold text-warning card-title mb-0"><strong>{localStorage.getItem('name')}</strong></h5>
                <p className="text-muted card-text mb-2">www.finger.net.ar</p>
              </div>
            </div>
          </div>

          <div className='hrContainer'>
            <hr className='hr' />
          </div>

          <div className="btnContainerMenu nav-link menu-title link-nav" id="alert-constru3" data-bs-original-title="" title="">
            <i className="bi bi-globe-americas"></i>
            <span>Portal</span>
          </div>

          <div className="btnContainerMenu nav-link menu-title link-nav" id="alert-constru3" data-bs-original-title="" title="">
            <i className="bi bi-speedometer"></i>
            <span>Dashboard</span>
          </div>

          <div className="btnContainerMenu nav-link menu-title link-nav" id="alert-constru3" data-bs-original-title="" title="">
            <i className="bi bi-speedometer"></i>
            <span>Configuraciones</span>
          </div>

          <div className='hrContainer'>
            <hr className='hr' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Leftnav;