import React from 'react'
import { NavLink } from 'react-router-dom'
import Logooq from "../assets/svg/logo-oq.svg"
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa6';
import F1 from "../assets/png/f1.png"
import F2 from "../assets/png/f2.png"
import F3 from "../assets/png/f3.png"
import F4 from "../assets/png/f4.png"
import "./Footer.css"
function Footer() {
  return (
    <div className='ft'>
      <footer>
        <div className="foot-1">
          <div className="logo-foot">
            <NavLink className="fot-nav" to="/">
              <img src={Logooq} alt="logo" />
              <p>Bistro Bliss</p>
            </NavLink>
          </div>
          <span>In the new era of technology we look a in the future with certainty and pride to for our company and.</span>
          <div className="foot-icons">
            <FaTwitter size={30} color="#AD343E" />
            <FaFacebook size={30} color="#AD343E" />
            <FaInstagram size={30} color="#AD343E" />
            <FaGithub size={30} color="#AD343E" />
          </div>
        </div>
        <div className="foot-2">
          <p>Pages</p>
          <NavLink className="nav-footer" to="/">
            Home
          </NavLink>
          <NavLink className="nav-footer" to="/about">
            About
          </NavLink>
          <NavLink className="nav-footer" to="/menu">
            Menu
          </NavLink>
          <NavLink className="nav-footer" to="/*">
            Pricing
          </NavLink>
          <NavLink className="nav-footer" to="/blog">
            Blog
          </NavLink>
          <NavLink className="nav-footer" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-footer" to="/*">
            Delivery
          </NavLink>
        </div>
        <div className="foot-3">
          <p>Utility Pages</p>
          <span>Start Here</span>
          <span>Styleguide</span>
          <span>Password Protected</span>
          <NavLink className="nav-footer"  to="/*">
            404 Not Found
          </NavLink>
          <span>Licenses</span>
          <span>Changelog</span>
          <span>View More</span>
        </div>
       <div className="foot-4">
        <span>Follow Us On Instagram</span>
        <div className='cc-f'>
          <div className='footer-imgs'>
            <img src={F1} alt="" />
            <img src={F2} alt="" />
          </div>
          <div className='footer-imgs'>
            <img src={F3} alt="" />
            <img src={F4} alt="" />
          </div>
        </div>
       </div>
      </footer>
    </div>
  )
}

export default Footer