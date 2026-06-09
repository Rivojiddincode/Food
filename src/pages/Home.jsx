import React from 'react'
import { NavLink } from 'react-router-dom'
import Breakfast from "../assets/svg/Breakfast.svg"
import Soat from "../assets/svg/soat.svg"
import Savat from "../assets/svg/savat.svg"
import Skidka from "../assets/svg/skidka.svg"
import MainDishes from "../assets/svg/MainDishes.svg"
import Drinks from "../assets/svg/Drinks.svg"
import Desserts from "../assets/svg/Desserts.svg"
import UsLavash from "../assets/png/Us-lavash.png"
import Caterings from "../assets/png/Caterings.png"
import Birthdays from "../assets/png/Birthdays.png"
import Avatar1 from "../assets/png/avatar1.png"
import Avatar2 from "../assets/png/avatar2.png"
import Avatar3 from "../assets/png/avatar3.png"
import Weddings from "../assets/png/Weddings.png"
import B1 from "../assets/png/b1.png"
import B2 from "../assets/png/b2.png"
import B3 from "../assets/png/b3.png"
import B4 from "../assets/png/b4.png"
import Burger from "../assets/png/Burger.png"
import f4 from "../assets/png/f4.png"
import f5 from "../assets/png/f5.png"
import Delivery from "../assets/png/Delivery.png"
import Events from "../assets/png/Events.png"
import { Phone, Mail } from 'lucide-react';
import { Locate } from 'lucide-react'
import "./Home.css"
function Home() {
   const smallCards = [
    {
      id: 1,
      image: B1, // rasm o'zgaruvchisi
      date: "January 3, 2023",
      title: "How to prepare the perfect french fries in an air fryer"
    },
    {
      id: 2,
      image: B2,
      date: "January 3, 2023",
      title: "How to prepare delicious chicken tenders"
    },
    {
      id: 3,
      image: B3,
      date: "January 3, 2023",
      title: "7 delicious cheesecake recipes you can prepare"
    },
    {
      id: 4,
      image: B4,
      date: "January 3, 2023",
      title: "5 great pizza restaurants you should visit this city"
    }
  ];
  return (
    <div>
      <div className="hero">
        <h1>Best food for
          your taste</h1>
        <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="buttons-hero">
          <NavLink to="/book">
            <button className='btn-hero1'>Book A Table</button>
          </NavLink>
          <NavLink to="/menu">
            <button className='btn-hero2'>Explore Menu</button>
          </NavLink>
        </div>
      </div>
      <div className="BrowseOurMenu">
        <p>Browse Our Menu</p>
        <div className='v'>
          <div className="Breakfast">
            <img src={Breakfast} alt="Breakfast" />
            <p>Breakfast</p>
            <span>In the new era of technology we look in the future with certainty and pride for our life.</span>
            <NavLink className="home-nav" to="/menu">Explore Menu</NavLink>
          </div>
          <div className="Breakfast">
            <img src={MainDishes} alt="Main Dishes" />
            <p>Main Dishes</p>
            <span>In the new era of technology we look in the future with certainty and pride for our life.</span>
            <NavLink className="home-nav" to="/menu">Explore Menu</NavLink>
          </div>
          <div className="Breakfast">
            <img src={Drinks} alt="Drinks" />
            <p>Drinks</p>
            <span>In the new era of technology we look in the future with certainty and pride for our life.</span>
            <NavLink className="home-nav" to="/menu">Explore Menu</NavLink>
          </div>
          <div className="Breakfast">
            <img src={Desserts} alt="Desserts" />
            <p>Desserts</p>
            <span>In the new era of technology we look in the future with certainty and pride for our life.</span>
            <NavLink className="home-nav" to="/menu">Explore Menu</NavLink>
          </div>
        </div>
      </div>
      <div className="Us">
        <div className="left-us">
          <img src={UsLavash} alt="UsLavash" />
            <div className="us-cont">
              <p>Come and visit us</p>
              <div className="us-cont-info">
                <Phone size={25} color="white" />
                <span>(414) 857 - 0107</span>
              </div>
              <div className="us-cont-info">
                <Mail size={25} color="white" />
                <span>happytummy@restaurant.com</span>
              </div>
              <div className="us-cont-info">
                <Locate size={25} color="white" />
                <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
              </div>
            </div>
        </div>
        <div className="right-us">
          <h2>
            We provide healthy food for your family.
          </h2>
          <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <span>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</span>
          <NavLink className="us-nav" to="/about"><button>More About Us</button></NavLink>
        </div>
      </div>
      <div className="katigores">
        <p>We also offer unique services for your events</p>
        <div className="katigores-cont">
          <div className='katigores-cart'>
            <img src={Caterings} alt="Caterings" />
            <p>Caterings</p>
            <span>In the new era of technology we look in the future with certainty for life.</span>
          </div>
          <div className='katigores-cart'>
            <img src={Birthdays} alt="Birthdays" />
            <p>Birthdays</p>
            <span>In the new era of technology we look in the future with certainty for life.</span>
          </div>
          <div className='katigores-cart'>
            <img src={Weddings} alt="Weddings" />
            <p>Weddings</p>
            <span>In the new era of technology we look in the future with certainty for life.</span>
          </div>
          <div className='katigores-cart'>
            <img src={Events} alt="Events" />
            <p>Events</p>
            <span>In the new era of technology we look in the future with certainty for life.</span>
          </div>
        </div>
      </div>
      <div className="Delivery">
        <div className="left-Delivery">
          <div className='Delivery-img'>
            <img src={Delivery} alt="Delivery" />
          </div>
          <div className="Delivery-img2">
<img src={f4} alt="f4" />
<img src={f5} alt="f5" />
          </div>
        </div>
        <div className="right-Delivery">
          <h4>Fastest Food Delivery in City</h4>
          <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
          <div className="d-cont">
            <img src={Soat} alt="soat" />
            <p>Delivery within 30 minutes</p>
          </div>
          <div className="d-cont">
            <img src={Skidka} alt="" />
            <p>Best Offer & Prices</p>
          </div>
          <div className="d-cont">
            <img src={Savat} alt="Savat" />
            <p>Online Services Available</p>
          </div>
        </div>
      </div>
      <div className="customers">
        <p>What Our Customers Say</p>
        <div className="cust-cont">
          <div className="cust-cart">
            <p>“The best restaurant”</p>
            <span>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</span>
            <div className="cust-nmae">
              <img src={Avatar1} alt="" />
              <div className="nms">
                <p>Sophire Robson</p>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
                <div className="cust-cart">
            <p>“Simply delicious”</p>
            <span>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</span>
            <div className="cust-nmae">
              <img src={Avatar2} alt="" />
              <div className="nms">
                <p>Matt Cannon</p>
                <span>San Diego, CA</span>
              </div>
            </div>
          </div>
                <div className="cust-cart">
            <p>“One of a kind restaurant”</p>
            <span>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</span>
            <div className="cust-nmae">
              <img src={Avatar3} alt="" />
              <div className="nms">
                <p>Andy Smith</p>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-section">
     
      <div className="blog-header">
        <h2>Our Blog & Articles</h2>
       <NavLink to="/blog"><button className="read-all-btn">Read All Articles</button></NavLink> 
      </div>

    
      <div className="blog-container">
        
       
        <div className="big-card">
          <div className="card-img-wrapper">
            <img src={Burger} alt="Burger" />
          </div>
          <div className="card-content">
            <span className="card-date">January 3, 2023</span>
            <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper 
              adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida 
              ut facilisis neque egestas.
            </p>
          </div>
        </div>

        {/* O'ng tomondagi 4 ta KICHIK kartalar to'plami */}
        <div className="small-cards-grid">
          {smallCards.map((card) => (
            <div className="small-card" key={card.id}>
              <div className="card-img-wrapper">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <span className="card-date">{card.date}</span>
                <h4>{card.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  )
}

export default Home