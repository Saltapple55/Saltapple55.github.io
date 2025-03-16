import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Capstone from './components/Capstone';
import Projects from './components/Projects';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactForm from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header pt-5">
        
      
<Router>

    
      <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/about">About me</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/capstone">Pawductivity</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element= { <AboutMe/> }/>

        <Route path='/about' element= { <AboutMe/> }/>
        <Route path='/capstone' element= { <Capstone/> }/>
        <Route path='/projects' element= { <Projects/> }/>
        <Route path='/contact' element= { <ContactForm/> }/>

      </Routes>
      </Router>
        {/* 
              <Portfolio/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
