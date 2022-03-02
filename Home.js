import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="headerContainer"> 
                <h1>Senior Project</h1>
                <p>Web-based tool for HCI simulation and analysis</p>
                <Link to="/systems"> 
                    <button>View Systems</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
