import { Block } from '@material-ui/icons';
import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Simulation.css';
import { useNavigate, useLocation } from 'react-router-dom';

function MenuEnd({menuItem}) {

    let navigate = useNavigate();

    function goBackConfig() {
        navigate('/configuration')
    }
    
    return (
        <div className="sim-con">
            <div className="item">
                <div className="item-con">
                    {menuItem.map((item) => <pre><h2>{item.title}</h2></pre>)}
                </div> 
            </div>
            <div className="my-button">
                <button onClick={goBackConfig}>Go Back</button> 
            </div>
        </div>
    )  
}

export default MenuEnd;

