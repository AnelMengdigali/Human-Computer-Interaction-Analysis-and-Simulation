import React from "react";
import SystemsItem from "../Components/SystemsItem";
import "../Styles/Systems.css";

function Systems() {

  const [card, setCard] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:8080/api/project/public")
        .then(res => res.json())
        .then(data => setCard(data))
  }, [])

  return (
    <div className="system">
      <div className="systemsList">
        {card.map((systemsItem, key) => {
          return (
            <SystemsItem
              key={key}
              id={systemsItem.id}
              image={`/images/${systemsItem.id}.png`}
              name={systemsItem.name}
              definition={systemsItem.description}
            />
          );
        })}
      </div>
    </div>
 
  );
}

export default Systems;
