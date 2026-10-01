import React from 'react'

const Hero = () => {
  return (
    <section className="herosec">
      <div className="hero">
        <div className="leftimg">
          <img src="/images/sit2.jpg" alt="Family walking on the beach" />
        </div>

        <div className="centertext">
          <p className="eyebrow">
            ADULT THERAPY IN{' '}
            <span className="nb">SANTA MONICA, CALIFORNIA</span>
          </p>

          <div className="line">
            <h1>
              Feel <span>grounded</span> again. Live with more clarity, confidence, and ease.
              {/* Rebuild your foundation on solid ground and finally begin to{' '}
              <span>thrive</span>. */}
            </h1>
            <p className="tagline">
              Therapy for adults navigating anxiety, panic, trauma, burnout, and overwhelming stress—with a warm, collaborative approach that brings together practical tools and deeper emotional work.
            </p>
          </div>

          <div className="book">
            <button type="button">START YOUR THERAPY JOURNEY </button>
          </div>
        </div>

        <div className="rightimg">
          <img src="/images/baby.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero