import React from 'react'

const Swing = () => {
  return (
    <div className='swing'>
        <div className="leftt">
          <div className="no1">
                <h3>HOW WE WORK</h3>

                <p>We’re here to make a difference.</p>
          </div>
          <div className="no2">
            <div className="ins">
              <div className="in-left">
                <span>The clients we work with are balancing <br />so many things at once, it’s often hard <br />for them to put themselves first.</span>
                <p>Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.</p>
              </div>
              <div className="in-right">
                <p>Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.</p>
              </div>
            </div>
          </div>
          <div className="no3">
            <button type="button">LEARN MORE ABOUT US</button>
          </div>
        </div>

        <div className="rightt">
            <img src="/images/play.jpg" alt="Child playing on a swing" />
        </div>
    </div>
  )
}

export default Swing