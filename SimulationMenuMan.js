import { Block } from '@material-ui/icons';
import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import '../Styles/Simulation.css';
import { useNavigate, useLocation } from 'react-router-dom';

function MenuMan({menuItem}) {

    let navigate = useNavigate();

    const [count, setCount] = useState(0)

    function changeNext() {
        setCount(prevCount => 
            prevCount === menuItem.length - 1 ? prevCount : prevCount + 1);
    }

    function changePrev() {
        setCount(prevCount => 
            prevCount === 0 ? 0 : prevCount - 1);
    }
    function goBackConfig() {
        navigate('/configuration')
    }
    
    return (
        <div className="sim-con">
            <div className="item">
                <div className="item-con" key={menuItem[`${count}`].id} >       
                    <pre><h2>{menuItem[`${count}`].title}</h2></pre>          
                </div>
            </div>
            <div className="my-button">
                <button onClick={goBackConfig}>Go Back</button> 
                <button onClick={changePrev}>Prev</button>
                <button onClick={changeNext}>Next</button> 
            </div>
        </div>
    )  
}

export default MenuMan;

