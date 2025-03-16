import React from 'react';
import Resume from '../assets/files/Audrey_Resume.pdf'
import CoverLetter from '../assets/files/Cover_Letter.pdf'
import Button from 'react-bootstrap/Button';
const AboutMe = () => {
    return (    
      <div className="section body">

        <section className="section " >
          <h1 className="header center">Hi, I'm Audrey Tjandra</h1>
          <br/>
          <p className="text">I'm a soon-to-be graduate of George Brown College from the Computer Programming and Analysis. Outside of school, I love birds, writing, composing, and spending time with my friends!</p>
          <p className="text">After graduating, I'm looking for a job in full-stack development. In particular, I like to develop mobile apps and websites! </p>
          
    </section>

    <a href={Resume} download="Audrey Resume" target='_blank'>
   <Button className='green'>Resume</Button>
</a>
<a href={CoverLetter} download="Audrey Cover Letter" target='_blank'>
   <Button className='green'>Cover Letter</Button>
</a>
        </div>
        
        
    )
}
export default AboutMe;