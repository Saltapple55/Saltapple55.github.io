import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React from 'react';

const Projects = () => {
    return (    
      <div className='body'>
        <section className="section" >
        <p className="text">This is a list of projects, and their github repositories, that I've made in school and on my own. My biggest project, Pawductivity, has its own dedicated page! </p>

          <Container>
            <Row>
              <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/springboot_microservices.png" />
      <Card.Body>
        <Card.Title>Item Inventory Software</Card.Title>
        <Card.Text>
A Springboot microservice application back-end softwarefor an ecommerce, including products, inventory, and orders.         </Card.Text>
        <a href="https://github.com/Saltapple55/Springboot_Microservice_ecommerce">
        <Button className='green'>Go to Repository</Button>
        </a>      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/connect4.png" />
      <Card.Body>
        <Card.Title>Connect 4</Card.Title>
        <Card.Text>
          A quick Connect Four Java game, complete with AI player that uses the Mini-Max Algorithm.
        </Card.Text>
        <a href="https://github.com/Saltapple55/Connect_4">
        <Button className='green'>Go to Repository</Button>
        </a>      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/employee_management.png" />
      <Card.Body>
        <Card.Title>Employee Manager System</Card.Title>
        <Card.Text>
          A fully deployed MERN stack with authentication for a sample employee management website. To test the website, use credentials username:"a", password: "p"
        </Card.Text>
        <a href="https://comp-3123-assignment2.vercel.app/employees">
        <Button className='green'>Go to Website</Button>
        </a>

        
        <a href="https://github.com/Saltapple55/Employee_Management">
        <Button className='green'>Go to Repository</Button>
        </a>
              </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
      <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/Travel_management.png" />
      <Card.Body>
        <Card.Title>Travel Agency Booking Website</Card.Title>
        <Card.Text>
          A travel agency booking website made with the ASP.NET framework, including Hotels, Cars, and Flights. Includes authentication. 
        </Card.Text>
        <a href="https://github.com/Saltapple55/Travel_Booking_Website">
        <Button className='green'>Go to Project</Button>
        </a>
              </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/flight_management.png" />
      <Card.Body>
        <Card.Title>Airline Booking Coordinator</Card.Title>
        <Card.Text>
          A C# software that simulates an airline management system. Uses the principles of Object-Oriented Programming.
        </Card.Text>
        <a href="https://github.com/Saltapple55/Flight_Manager">
        <Button className='green'>Go to Project</Button>
        </a>      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/manulife_website.png" />
      <Card.Body>
        <Card.Title>Manulife Website Redesign</Card.Title>
        <Card.Text>
          A redesign of Manulife's website, cased on HTML, CSS, and Bootstrap. 
        </Card.Text>
        <a href="https://saltapple55.github.io/Manulife-Website-Redesign/">
        <Button className='green'>Go to Website</Button>
        </a>
        <a href="https://github.com/Saltapple55/ui-ux-final-project">
        <Button className='green'>Go to Repository</Button>
        </a>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </section>  
    </div>     
    )
}
export default Projects;