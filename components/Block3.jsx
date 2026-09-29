import React from 'react'

const Block3 = () => {
  return (
    <div className='block3'>
        <h1 className='dad'>Who we <span>help</span></h1>
        <div className="inside1">
            <div className="box1">
                <img src="/images/teens.jpeg" alt="" />
                <h2>Adults</h2>
                <span>Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.</span>
            </div>
            <div className="box2">
                <img src="/images/adults.jpeg" alt="" />
                <h2>Couples</h2>
                <span>Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.</span>
            </div>
            <div className="box3">
                <img src="/images/child.jpeg" alt="" />
                <h2>Children &amp; Teens</h2>
                <span>Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.</span>
            </div>
        </div>
    </div>
  )
}

export default Block3