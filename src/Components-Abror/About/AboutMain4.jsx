import React from 'react'
import './AboutMain4.css'
import writer1 from '../AbrorAssets/writer1.png'
import writer2 from '../AbrorAssets/writer2.png'
import writer3 from '../AbrorAssets/writer3.png'
const AboutMain4 = () => {
  return (
    <div>
      <section className="testimonials">
  <h1>What Our Customers Say</h1>

  <div className="cards">
    <div className="card">
      <h3>“The best restaurant”</h3>

      <p>
        Last night, we dined at place and were simply blown away.
        From the moment we stepped in, we were enveloped in an
        inviting atmosphere and greeted with warm smiles.
      </p>

      <div className="user">
        <img
          src={writer1}
          alt=""
        />

        <div>
          <h4>Sophire Robson</h4>
          <span>Los Angeles, CA</span>
        </div>
      </div>
    </div>

    <div className="card">
      <h3>“Simply delicious”</h3>

      <p>
        Place exceeded my expectations on all fronts. The
        ambiance was cozy and relaxed, making it a perfect
        venue for our anniversary dinner. Each dish was
        prepared and beautifully presented.
      </p>

      <div className="user">
        <img
          src={writer2}
          alt=""
        />

        <div>
          <h4>Matt Cannon</h4>
          <span>San Diego, CA</span>
        </div>
      </div>
    </div>

    <div className="card">
      <h3>“One of a kind restaurant”</h3>

      <p>
        The culinary experience at place is first to none.
        The atmosphere is vibrant, the food — nothing short
        of extraordinary. The food was the highlight of our
        evening. Highly recommended.
      </p>

      <div className="user">
        <img
          src={writer3}
          alt=""
        />

        <div>
          <h4>Andy Smith</h4>
          <span>San Francisco, CA</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AboutMain4
