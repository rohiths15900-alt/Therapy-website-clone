import React from 'react'

const Appointment = () => {
  return (
    <div className='appointment'>
        <div className="inn">
            <div className="b1">
                <img src="/images/hand.jpg" alt="" />

        </div>
        <div className="b2">
            <h3>SCHEDULE AN APPOINTMENT </h3>

            <h1>Find a therapist who is the right fit for  <span>you</span>.</h1>

            <p>
                Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <pre>Click the button below to schedule an appointment.</pre>
            <button>
                BOOK NOW
            </button>
        </div>
        <div className="b3">
            <img src="/images/point.jpg" alt="" />
        </div>
        </div>

    </div>
  )
}

export default Appointment