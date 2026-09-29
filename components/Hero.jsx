import React from 'react'

const Hero = () => {
  return (
    <section className="herosec">
      <div className="hero">
        <div className="leftimg">
          <img src="/images/hero-family.jpg" alt="Family walking on the beach" />
        </div>

        <div className="centertext">
            <p className="eyebrow">
                ONLINE &amp; IN-PERSON COUNSELING IN{' '}
                <span className="nb">NEWBURY PARK</span> &amp;{' '}
                <span className="nb">ACROSS CA</span>
            </p>

          <div className="line">
            <h1>
              Rebuild your foundation on solid ground and finally begin to{' '}
              <span>thrive</span>.
            </h1>
            <p className="tagline">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
          </div>

          <div className="book">
            <button type="button">BOOK AN APPOINTMENT</button>
          </div>
        </div>

        <div className="rightimg">
          <img src="/images/quiet-beach.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero