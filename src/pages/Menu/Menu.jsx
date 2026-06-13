// Menu.jsx
import React from "react";
import "./Menu.css";
import Tuxum from "../../assets/tuxum.png";
import Pizza from "../../assets/piza.png";
import Sok from "../../assets/sok.png";
import Tort from "../../assets/tort.png";
import moxito from "../../assets/moxito.png";
import Marojna from "../../assets/marojna.png";
import Burger from "../../assets/burger.png";
import Vafli from "../../assets/vafli.png";
import Logo from "../../assets/logo.png";

function Menu() {
  return (
    <div className="container">
      <h2>Our Menu</h2>
      <div className="menu-tabs">
        <button>All</button>
        <button>Breakfast</button>
        <button>Main Dishes</button>
        <button>Drinks</button>
        <button>Desserts</button>
      </div>

      <div className="menu-items">
        <div className="item">
         <img src={Tuxum} alt="" />
          <h3>Fried Eggs</h3>
          <p>$9.99</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Pizza} alt="" />
          <h3>Hawaiian Pizza</h3>
          <p>$15.99</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Sok} alt="" />
          <h3>Martinez Cocktail</h3>
          <p>$7.25</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Tort} alt="" />
          <h3>Butterscotch Cake</h3>
          <p>$20.99</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={moxito} alt="" />
          <h3>Mint Lemonade</h3>
          <p>$5.89</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Marojna} alt="" />
          <h3>Chocolate Icecream</h3>
          <p>$18.05</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Burger} alt="" />
          <h3>Cheese Burger</h3>
          <p>$12.55</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>

        <div className="item">
          <img src={Vafli} alt="" />
          <h3>Classic Waffles</h3>
          <p>$12.99</p>
          <span>Made with eggs, lettuce, salt, oil and other ingredients.</span>
        </div>
      </div>

      <div className="order-apps">
        <div className="order">
        <h4>You can order through apps</h4>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit enim bibendum sed et aliquet <br /> aliquet risus tempor semper.</p>
        </div>
        <div className="apps">
          <img src={Logo} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export default Menu;
