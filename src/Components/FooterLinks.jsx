import React from 'react'
import { Link } from 'react-router-dom'

function Footer (props){
    return(
        <>
        <div className="card-footer text-warning text-left">
                <ul className="nav justify-content-start">
                    <li className="nav-item">
                        <Link to='/faq'><p className="nav-link text-warning">FAQ</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/career'><p className="nav-link text-warning">Career</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'><p className="nav-link text-warning">About us</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'><p className="nav-link text-warning">Contact us</p></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer