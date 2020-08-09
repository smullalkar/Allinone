import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
  const { isAuth, handleLogout, cartArray } = props
  if (!isAuth) {
    return (
      <>
        <nav className="navbar navbar-light row">
          <div className='col-lg-4 col-md-3 col-sm-12 col-12 my-1'>
            <p className="navbar-brand d-flex justify-content-center justify-content-lg-start ">
              <Link to='/'><img src="data:image/png;base64,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" width="200" height="50" className="d-inline-block align-top rounded" alt="img" /></Link>
            </p>
          </div>
          <div className='col-lg-8 col-md-9 col-sm-12 my-1'>
            <ul className="nav justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center">
              <li className="nav-item">
                <Link to='/'><p className="nav-link text-warning">Home</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/men/asc'><p className="nav-link text-warning">Men</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/women/asc'><p className="nav-link text-warning">Women</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/kids/asc'><p className="nav-link text-warning">Kids</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/all/asc'><p className="nav-link text-warning">All Products</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/signin'><p className="nav-link text-warning">Sign in</p></Link>
              </li>
              <p className="navbar-brand">
                <Link to='/cart'>
                  <img src="https://img.icons8.com/nolan/64/favorite-cart.png" width="40" height="40" className="d-inline-block align-top rounded" alt="img" />
                </Link>
              </p>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  else {
    return (
      <>
        <nav className="navbar navbar-light row">
          <div className='col-lg-4 col-md-3 col-sm-12 col-12 my-1'>
            <p className="navbar-brand d-flex justify-content-center justify-content-lg-start ">
              <Link to='/'><img src="data:image/png;base64,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" width="200" height="50" className="d-inline-block align-top rounded" alt="img" /></Link>
            </p>
          </div>
          <div className='col-lg-8 col-md-9 col-sm-12 my-1'>
            <ul className="nav justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center">
              <li className="nav-item">
                <Link to='/'><p className="nav-link text-warning">Home</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/men/asc'><p className="nav-link text-warning">Men</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/women/asc'><p className="nav-link text-warning">Women</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/kids/asc'><p className="nav-link text-warning">Kids</p></Link>
              </li>
              <li className="nav-item">
                <Link to='/all/asc'><p className="nav-link text-warning">All Products</p></Link>
              </li>
              <li className="nav-item">
                <p className="nav-link text-warning" onClick={handleLogout}>Sign out</p>
              </li>
              <p className="navbar-brand">
                <Link to='/cart'>
                  <img src="https://img.icons8.com/nolan/64/favorite-cart.png" width="40" height="40" className="d-inline-block align-top rounded" alt="img" /><span>({cartArray.length})</span>
                </Link>
              </p>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
