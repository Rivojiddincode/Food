import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa6';
import { Phone, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/svg/logo.svg"
import "./Header.css";
function Heder() {
  return (
    <div>
      <div className="top-bar">
        <div className="infos-top-bar">
          <Phone size={25} color="white" />
          <p>(414) 857 - 0107</p>
          <Mail size={25} color='white' />
          <p>yummy@bistrobliss</p>
        </div>
        <div className="icons-top-bar">
          <FaTwitter size={20} color="white" />
          <FaFacebook size={20} color="white" />
          <FaInstagram size={20} color="white" />
          <FaGithub size={20} color="white" />
        </div>
      </div>
      <header>
        <NavLink  to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <p>Bistro Bliss</p>
        </div></NavLink>
        <div className="nav">
          <NavLink  className="nav-menu" to="/">
            Home
          </NavLink>
          <NavLink  className="nav-menu" to="/about">
            About
          </NavLink>
          <NavLink  className="nav-menu" to="/menu">
            Menu
          </NavLink>
          <NavLink  className="nav-menu" to="/*">
            Pages
          </NavLink>
          <NavLink  className="nav-menu" to="/contact">
            Contact
          </NavLink>
        </div>

        <NavLink to="/book"><button>
          Book A Table
        </button>
        </NavLink>
      </header>
    </div>
  );
}

export default Heder;
