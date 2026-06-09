import React from 'react'
import './AboutMain3.css'
import dish from '../../../assets/png/dish.png'
const AboutMain3 = () => {
  return (
    <div>
      <section className="info">
  <div className="infoLeft">
    <h1>
      A little information <br />
      for our valuable guest
    </h1>

    <p>
      At place, we believe that dining is not just about food, but also about
      the overall experience. Our staff, renowned for their warmth and
      dedication, strives to make every visit an unforgettable event.
    </p>

    <div className="cards">
      <div className="c1">
        <h2>3</h2>
        <span>Locations</span>
      </div>

      <div className="c2">
        <h2>1995</h2>
        <span>Founded</span>
      </div>

      <div className="c3">
        <h2>65+</h2>
        <span>Staff Members</span>
      </div>

      <div className="c4">
        <h2>100%</h2>
        <span>Satisfied Customers</span>
      </div>
    </div>
  </div>

  <div className="infoRight">
    <img
      src={dish}
      alt="chef"
    />
  </div>
</section>
    </div>
  )
}

export default AboutMain3
