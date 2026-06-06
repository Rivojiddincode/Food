import React from 'react'
import './Book.css'
import map from '../AbrorAssets/map.png'
const Book = () => {
  return (
    <div>
      <section className="book">
  <div className="top">
    <h1>Book A Table</h1>
    <p>
      We consider all the drivers of change gives you the
      components you need to change to create a truly happens.
    </p>

    <form className="form">
      <div className="row">
        <div className="inputBox">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="inputBox">
          <label>Time</label>
          <input type="time" />
        </div>
      </div>

      <div className="row">
        <div className="inputBox">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="inputBox">
          <label>Phone</label>
          <input type="text" placeholder="x-xxx-xxx-xxxx" />
        </div>
      </div>

      <div className="inputBox full">
        <label>Total Person</label>

        <input type="number" placeholder="Number of people" />
      </div>

      <button>Book A Table</button>
    </form>
  </div>

  <div className="map">
    <img
      src={map}
      alt=""
    />
  </div>
</section>
    </div>
  )
}

export default Book
