import React from 'react'

const Swing = () => {
  return (
    <div className='swing'>
        <div className="leftt">
          <div className="no1">
                <h3>Meet Dr. MAYA REYNOLDS. PSYD</h3>

                <p>Practicl tools. Deeper understanding. <br />A therapy experience built around you.</p>
          </div>
          <div className="no2">
            <div className="ins">
              <div className="in-left">
                <span>Dr. Maya Reynolds is a licensed clinical <br />psychologist in santa monica, california.<br />Specializing in thereapy for adults experiencing anxiety, panic, burnout, perfectionism, and chornic stress.</span>
                <p>Her approach is warm, collaborative, and grounded. She combines evidence-based approaches including CBT, EMDR, mindfulness-based practices, and body-oriented techniques, creating space to understand both the emotional and physiological sides of what you are experiencing.</p>
              </div>
              <div className="in-right">
                <p>Sessions are structured enough to feel supportive while leaving room for reflection and deeper work. I believe therapy works best when you feel respected, understood, and actively involved in the process. Trauma-informed care is an important part of her work, with an emphasis on safety, stabilization, pacing, and emotional regulation. She also works with professionals, entrepreneurs, and creatives experiencing burnout, perfectionism, and the pressure of constantly pushing forward. <br /> <br /> Her goal extends beyond symptom relief—to help clients develop greater insight, resilience, self-understanding, and a stronger relationship with themselves over time.</p>
              </div>
            </div>
          </div>
          <div className="no3">
            <button type="button">LEARN MORE ABOUT DR. MAYA</button>
          </div>
        </div>

        <div className="rightt">
            <img src="/images/maya.png" alt="Child playing on a swing" />
        </div>
    </div>
  )
}

export default Swing