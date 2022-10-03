import './App.css';
import React from 'react';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          {/* Importing dark navbar from bootstrap */}
          <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Lab2</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#read">Read</Nav.Link>
                  <Nav.Link href="#create">Create</Nav.Link>
                </Nav>
              </Container>
          </Navbar>
        <br></br>
        {/* Importing route to call each page */}
          <Routes>
            <Route path='/read' element={<Header></Header>}></Route>
            <Route path='/' element={<Content></Content>} exact></Route>
            <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>
    </Router>
   );
  }
}

export default App;
