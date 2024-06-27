import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import MyExperience from "./components/MyExperience";
import HomePage from "./components/HomePage";
import MyProjects from "./components/MyProjects";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App dark-grey-bg text-color">
      <Router>
        <header>
          <Navbar expand="lg">
            <Container className="mx-auto ">
              <Nav className="mx-auto m-2 p-2">
                <Link to="/" className="mx-auto m-2 p-2 text-color text-decoration-none">
                  Home
                </Link>
                <Link to="/MyProjects" className="mx-auto m-2 p-2 text-color text-decoration-none">
                  My Projects
                </Link>
                <Link to="/MyExperience" className="mx-auto m-2 p-2 text-color text-decoration-none">
                  My Experience
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <div className="display">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MyProjects" element={<MyProjects />} />
            <Route path="/MyExperience" element={<MyExperience />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
