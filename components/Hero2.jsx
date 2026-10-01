import React from 'react'

const Hero2 = () => {
  return (
    <div className='hero2'>
        <div className="text1">
            <span className='hed'>
                You may look like you're holding it <br />all together. But inside, it can fell <br /> very diffrent.
            </span>
           <div className="another">
             <div className="lefty">
                    <span>
                        We understand that things can feel different inside, even when you seem to have it all together. We’re here to help.
                    </span>
                    <p>You’re thoughtful, capable, and used to pushing forward. Yet beneath the surface, you may be dealing with constant worry, overthinking, tension, difficulty sleeping, or the feeling that you’re always waiting for something to go wrong.</p>
                </div>
                <div className="righty">
                    <p>Maybe past experiences are still affecting your relationships, confidence, or sense of safety. Or years of professional pressure and perfectionism have left you feeling exhausted and disconnected from yourself.</p> <br />
                    <p>Therapy can give you space to slow down, understand what’s happening, and begin creating a more sustainable way forward.</p>
                </div>
           </div>
        </div>
        <div className="image-hero2">
            <img src="/images/baby.jpg" alt="Quiet beach at the shoreline" />
        </div>
    </div>
  )
}

export default Hero2