import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

function SystemsItem(props) {

  return (
    <div className="systemsItem">
      {
      props.id === 1 && 
      <Link underline='none' component={RouterLink} to={{pathname: "/configuration"}}>    
        <div style={{ backgroundImage: `url(${props.image})` }}></div>
        <h3> {props.name} </h3>
        <p> {props.definition} </p>
      </Link>
      }     
      {
        props.id !== 1 &&
        <div>
          <div style={{ backgroundImage: `url(${props.image})` }}></div>
          <h3> {props.name} </h3>
          <p> {props.definition} </p>
        </div>
      }
    </div>
  );
}

export default SystemsItem;

{/* <h4>{badgeText}</h4>
<h4>PUBLIC</h4>
  {props.type === "public" && <h4>PUBLIC</h4>}
  {props.type === "private" && <h4>PRIVATE</h4>} */}