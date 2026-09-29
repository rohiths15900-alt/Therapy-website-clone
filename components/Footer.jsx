import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="card1">
            <img src="/images/logo.png" alt="" />
            <p>
                We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.    
            </p>

        </div>
        <div className="card2">
            <div className="in-card1">
                <h2>NAVIGATE</h2>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">FAQs</a>
                <a href="">Contact</a>
            </div>
            <div className="in-card2">
                <h2>OUR TEAM</h2>
                <a href="">Jennifer Anderson</a>
                <a href="">Heather Williams-Baumgart </a>
                <a href="">Autumn Bodily </a>
                <a href="">Candace Bletscher </a>
                <a href="">Samantha Johnson </a>
                <a href="">Rosa Gomez </a>
                <a href="">Chad Flores </a>
            </div>
            <div className="in-card3">
                <h2>CONTACT</h2>
                <p className='per'>
                    925 Broadbeck Dr <br />
                    Suites 200 and 225 <br />
                    Newbury Park, CA 91320 <br />
                    info@conejovalleycounseling.com <br />
                    805.242.3120 <br />
                </p>
                <p className='par'>
                    Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer