import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Setup from './Components/Setup';

import Home from './Pages/Home';
import Systems from './Pages/Systems';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Models from './Pages/Models';
import Moderator from './Pages/Moderator';

import SimulationMan from './Components/SimulationMan'
import SimulationEnd from './Components/SimulationEnd'

import ModelDB from './Pages/ModelDB';
import EntityDB from './Pages/EntityDB';

import CreateSysModel from './Helpers/CreateSysModel';
import CreateCogModel from './Helpers/CreateCogModel';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CustomizedDialogs from './Components/Dialog';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Container>
            <NavBar/>
              <Routes> 
                <Route path="/"  element={<Home />} />
                <Route path="/systems"  element={<Systems />} />
                <Route path="/simulationMan"  element={<SimulationMan />} /> 
                <Route path="/simulationEnd"  element={<SimulationEnd />} /> 
                <Route path="/configuration"  element={<Models />} />
                <Route path="/models"  element={<ModelDB />} />
                <Route path="/entities"  element={<EntityDB />} />
                {/* <Route path="/datasets"  element={} /> */}
                <Route path="/moder"  element={<Moderator />} />
                <Route path="/about"  element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/login" exact element={} />  */}
                <Route path="/createSysModel" element={<CreateSysModel />} />
                <Route path="/createCogModel" element={<CreateCogModel />} />
              </Routes>
          </Container>
        <Footer/>
      </Router>
    </div>
  )
}

const Container = styled.div`
  background: white;
`;

export default App;