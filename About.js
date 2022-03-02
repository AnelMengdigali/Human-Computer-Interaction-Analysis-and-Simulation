import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
        <h1> More about this website and responsible team </h1>
        <p>This project aims to develop a web-based tool for the simulation and analysis of models of human reasoning, learning and behavior as well as interactive systems composed of human components and computer/physical components. The purpose of the tool is two-fold:</p>
        <div className="bullets">
          <p>- use the simulation  to carry out in silico experiments on the human component, compare them with experiments with human subjects</p>
          <p>- simulate and analyse the overall interactive system</p>
        </div>
        <p>Typical users of the framework will be cognitive psychologists, HCI design teams, usability analysts. The domain experts from psychology and HCI would benefit from this system by conducting their experiments to validate the cognitive theory.</p>
        <p>The tool will include simulation and analysis engines as well as appropriate interfaces and mechanisms for:</p> 
        <div className="bullets">
          <p>- modeling the human components, the computer/physical components and the operating environment;</p>
          <p>- setting up and controlling the simulation and analysis of the overall system;</p>
          <p>- presenting and comparing the results of the experiments.</p>
        </div>
    </div>
  );
}

export default About;
