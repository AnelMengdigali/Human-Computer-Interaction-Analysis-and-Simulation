import React from 'react';
import items from '../Helpers/SimulationData';
import console from '../Helpers/ConsoleData';

import MenuMan from '../Helpers/SimulationMenuMan';
import Button from './Button';

import '../Styles/Simulation.css';

const allCategories = ['Global State', ...new Set(items.map(item => item.category))];

function SimulationMan() {
  const [menuItem, setMenuItem] = React.useState(console);
  
  const [buttons, setButtons] = React.useState(allCategories);

  // const model = {
  //   cognitiveModelId: 1,
  //   systemModelId: 1
  // }
  // const [data, setData] = React.useState([])
  // React.useEffect(() => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(model)
  //   };
  //   fetch("https://hci-testing-backend.herokuapp.com/api/simulation/manual", requestOptions)
  //       .then(res => res.json())
  //       .then(data => setData(data));
  // }, [])

  const filter = (button) =>{

    if(button === 'Global State'){
      setMenuItem(console);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
    
    // setMenuItem(data);
    
  }


  return (
    <div className="App">
       
       <div className="title">
         <h1>
           Simulation Results
         </h1>
       </div>

      <div className="elem-con">
        <Button button={buttons} filter={filter}/>
        <MenuMan menuItem={menuItem}/>
      </div>

    </div>
  );
}

export default SimulationMan;