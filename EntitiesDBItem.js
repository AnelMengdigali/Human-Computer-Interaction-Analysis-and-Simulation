import React from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function EntityDBItem(props) {
  const styles = {
    textTransform: 'lowercase',
    textDecoration: 'none'
  }
  return (
    <div>
        <div className="entityDBItem" style={styles}>
            <h3> {props.name} </h3>
            <p> {props.definition} </p> 
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}></ToggleButtonGroup>
        </div>
    </div>
  );
}

export default EntityDBItem;