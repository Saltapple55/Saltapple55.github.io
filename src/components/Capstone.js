import React from 'react';
import Button from 'react-bootstrap/Button';
import ProjectPlan from '../assets/files/T53-Project Plan.pdf'
import ProjectVision from '../assets/files/Project_Vision.pdf'
import HighLevelRequirements from '../assets/files/High_Level_Requirements.pdf'
const Capstone = () => {
    return (  
        <div className="body">  
        
        <section className="section center" >
          <h1 className="header">Pawductivity</h1>
          <br/>

          <img src="/images/happy-cat.png"/>
          <br/>
          </section>


          <p className="text">  Pawductivity is a mobile application developed to promote productivity and mental health behaviors by gamifying positive behavior. The primary user, a person suffering from self-motivation and self-control, will be able to create and track their own goals, record their mood and thoughts, and temporarily block their phone usage to focus on tasks. The app encourages self-care through the care of a virtual avatar. 
</p>
          

<section className="section">

<a href={ProjectPlan} download="Pawductivity" target='_blank'>
   <Button className='green' >Project Plan</Button>
</a>
<a href={ProjectVision} download="Pawductivity" target='_blank'>
   <Button className='green' >Project Vision</Button>
</a>
<a href={HighLevelRequirements} download="Pawductivity" target='_blank'>
   <Button className='green' >High level Requirements</Button>
</a>
<h2 className='center'>Wireframe</h2>
<p className='text'>To see the wireframe in full, please exit the Flows tab or press full screen</p>
<iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="400"
      height="800"
      src="https://embed.figma.com/proto/VMS8JcHbcggVFDx3bHifHK/Capstone?node-id=246-1003&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=246%3A1003&show-proto-sidebar=1&embed-host=share"
      allowFullScreen
    ></iframe>

        </section>
        <section className="section">
            <h2>System Implementation</h2>

   <Button className='green'>Link to Repository</Button>


        </section>
        </div>
        
    )
}
export default Capstone;