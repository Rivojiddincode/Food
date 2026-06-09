import React from 'react'
import './AboutMain1.css'
import img from '../../../assets/png/img.png'
const AboutMain1 = () => {
  return (
    <div>
      <div className="section">
  <div className="left">
    <div className="imageBox">
      <img
        src={img}
        alt="food"
      />


    </div>
  </div>

  <div className="right">
    <h1>We provide healthy food for your family.</h1>

    <p className="p1">
      Our story began with a vision to create a unique dining experience that
      merges fine dining, exceptional service, and a vibrant ambiance. Rooted
      in city's rich culinary culture, we aim to honor our local roots while
      infusing a global palate.
    </p>

    <p className="p2">
      At place, we believe that dining is not just about food, but also about
      the overall experience. Our staff, renowned for their warmth and
      dedication, strives to make every visit an unforgettable event.
    </p>
  </div>
</div>
    </div>
  )
}

export default AboutMain1
