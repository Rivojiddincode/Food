import React from 'react'
import img1 from "../../assets/Blog_Img/img1.png"
import img2 from "../../assets/Blog_Img/img2.png"

import "./Detail.css"

const Detail = () => {
  return (

    <div className='main'>
      <div className="header">
        <div className="head">
          <h2>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h2>
          <img src={img1} alt="" />
        </div>
        <div className="text">
          <h3>What do you need to prepare a home-made burger?</h3>
          <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the <br />
            palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world. <br /> <br />


            1. Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results. <br />
            2. Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them. <br />
            3. Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed. <br />
            4. Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices. <br />
            5. Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite. <br />
          </p>
        </div>
        <div className="text">
          <h3>What are the right ingredients to make it delicious?</h3>
          <p>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the <br />
            palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world. <br /> <br />

            1. Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.<br />
            2. Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them. <br />
            3. Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed. <br />
            4. Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices. <br />
            5. Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite. <br />
          </p>
        </div>
      </div>
      <div className="head2">
        <img src={img2} alt="" />
        <div className="text2">
          <h3>What are the right ingredients to make it delicious?</h3>
          <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales 
            augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit 
            elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet 
            purus gravida quis blandit turpis..
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail
