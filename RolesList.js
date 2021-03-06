import React from 'react';
import '../Styles/Roles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RolesList(props){

    const items = props.items;
    const listItems = items.map(item =>
   {
       return (
        <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
                <span>    
                    <FontAwesomeIcon className="faicons" onClick={() => {props.deleteItem(item.key)}} icon="trash" />
                </span>
            </p>
        </div>
       );
    })
    return (
        <div>
            {listItems}    
        </div>
    );

  }

  export default RolesList;