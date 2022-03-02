import React from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function ModelDBItem(props) {

  return (
    <div>
        <div className="modelDBItem">
            <h3> {props.name} </h3>
            <p> {props.definition} </p> 
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}></ToggleButtonGroup>
        </div>
    </div>
  );
}

export default ModelDBItem;