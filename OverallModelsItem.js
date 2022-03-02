import React from "react";
import { useNavigate } from 'react-router-dom';

function ModelsItem(props) {

    let navigate = useNavigate();

  return (
    
    <div>
        <div>
            <select>
                <option>{props.name}</option>
            </select>
            <p> {props.definition} </p>
            {/* <select>
                <option>{props.version}</option>
            </select>
            <button onClick={() => {navigate.push('/models')}}>Choose</button> */}
        </div>
    </div>

  );
}

export default ModelsItem;
