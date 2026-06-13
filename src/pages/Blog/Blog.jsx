import React from "react";
import "./Blog.css";
import Sushi from "../../assets/sushi.png";
import Xamr from "../../assets/xamr.png"
import Kartoshka from "../../assets/kartoshka.png"
import Kfc from "../../assets/kfc.png"
import Shakalad from "../../assets/shkalad.png"
import Pizza from "../../assets/pizza.png"
import Ovqat from "../../assets/ovqat.png"
import Tort from "../../assets/tort1.png"
import Oshxona from "../../assets/oshxona.png"
import Lavash from "../../assets/lavash.png"
import Pasta from "../../assets/pasta.png"
import Ponchik from "../../assets/ponchik.png"


const Blog = () => {
  return (
    <section className="container blog-section">
      <h2>Our Blog & Articles</h2>
      <p className="subtitle">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="container blog-grid">
        <div className="container blog-card">
          <img src={Sushi} alt="Gluten free sushi" />
          <p className="date">January 3, 2023</p>
          <h3>How to prepare a delicious gluten free sushi</h3>
        </div>

        <div className="container blog-card">
          <img src={Kartoshka} alt="Pastry king" />
          <p className="date">January 3, 2023</p>
          <h3>Exclusive baking lessons from the pastry king</h3>
        </div>

        <div className="container blog-card">
          <img src={Kfc} alt="Air fryer fries" />
          <p className="date">January 3, 2023</p>
          <h3>How to prepare the perfect fries in an air fryer</h3>
        </div>

        <div className="container blog-card">
          <img src={Xamr} alt="Chicken tenders" />
          <p className="date">January 3, 2023</p>
          <h3>How to prepare delicious chicken tenders</h3>
        </div>

        <div className="container blog-card">
          <img src={Shakalad} alt="Cooking gadgets" />
          <p className="date">January 3, 2023</p>
          <h3>5 great cooking gadgets you can buy to save time</h3>
        </div>

        <div className="container blog-card">
          <img src={Ovqat} alt="Perfect burger" />
          <p className="date">January 3, 2023</p>
          <h3>The secret tips & tricks to prepare a perfect burger</h3>
        </div>

        <div className="container blog-card">
          <img src={Tort} alt="Cheesecake recipes" />
          <p className="date">January 3, 2023</p>
          <h3>7 delicious cheesecake recipes you can prepare</h3>
        </div>

        <div className="container blog-card">
          <img src={Pizza} alt="Pizza restaurants" />
          <p className="date">January 3, 2023</p>
          <h3>5 great pizza restaurants you should visit this city</h3>
        </div>

        <div className="container blog-card">
          <img src={Oshxona} alt="Cooking gadgets" />
          <p className="date">January 3, 2023</p>
          <h3>5 great cooking gadgets you can buy to save time</h3>
        </div>

        <div className="container blog-card">
          <img src={Lavash} alt="Gluten free sushi" />
          <p className="date">January 3, 2023</p>
          <h3>How to prepare a delicious gluten free sushi</h3>
        </div>

        <div className="container blog-card">
          <img src={Pasta} alt="Quick desserts for kids" />
          <p className="date">January 3, 2023</p>
          <h3>Top 20 simple and quick desserts for kids</h3>
        </div>

        <div className="container blog-card">
          <img src={Ponchik} alt="Quick desserts for kids" />
          <p className="date">January 3, 2023</p>
          <h3>Top 20 simple and quick desserts for kids</h3>
        </div>
      </div>
    </section>
  );
};

export default Blog;
