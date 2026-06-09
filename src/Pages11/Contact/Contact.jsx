import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="ctn">
            <h2>Contact Us</h2>
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        </div>
        <div className="input">
            <div className="input-in">
                <div className="card11">
                    <div className="topp">
                        <p>Name</p>
                        <input type="text" placeholder='Enter your name' />
                    </div>
                    <div className="topp">
                        <p>Email</p>
                        <input type="email" placeholder='Enter email address' /> 
                    </div>  
                </div>
                <p className='ppp'>Subject</p>
                <input type="text" placeholder='Write a subject' className='pass'/>
                <div className="pass-long">
                    <p className='ppp'>Message</p>
                    <input type="text" placeholder='Write your message'/>  
                </div>
                <button>Send</button>
            </div>
        </div>
        <div className="info">
            <div className="info1">
                <h3>Call Us:</h3>
                <p className='raqam'>+1-234-567-8900</p>
            </div>
            <div className="info1">
                <h3>Hours</h3>
                <p>Mon-Fri: 11am - 8pm <br />Sat, Sun: 9am - 10pm</p>
            </div>
            <div className="info1">
                <h3>Our Location:</h3>
                <p>123 Bridge Street <br />Nowhere Land, LA 12345 <br />United States</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
