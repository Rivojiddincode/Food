import React from 'react'

import img1 from "../../assets/Blog_Img/cart1.png"
import img2 from "../../assets/Blog_Img/cart2.png"
import img3 from "../../assets/Blog_Img/cart3.png"
import img4 from "../../assets/Blog_Img/cart4.png"

import "./Article.css"

const Article = () => {
  return (
    <div>
      <div className="bosh1">
        <div className="artc">
            <h2>
                Read More Articles
            </h2>
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="carts">
            <div className="cart1">
                <img src={img1} alt="Article Image" />
                <h3>January 3, 2023</h3>
                <p>How to prepare a delicious gluten free sushi</p>
            </div>
            <div className="cart1">
                <img src={img2} alt="Article Image" />
                <h3>January 3, 2023</h3>
                <p>Exclusive baking lessons from the pastry king</p>
            </div>
            <div className="cart1">
                <img src={img3} alt="Article Image" />
                <h3>January 3, 2023</h3>
                <p>How to prepare the perfect fries in an air fryer</p>
            </div>
            <div className="cart1">
                <img src={img4} alt="Article Image" />
                <h3>January 3, 2023</h3>
                <p>How to prepare delicious chicken tenders</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Article
