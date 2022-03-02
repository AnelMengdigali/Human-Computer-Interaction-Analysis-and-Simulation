import React from "react";
import EntityDBItem from "../Components/EntitiesDBItem";
import { EntityDBList } from "../Helpers/EntitiesData";
import "../Styles/EntityDB.css";

function EntityDB() {

  // const [data, setData] = React.useState([])
  //   React.useEffect(() => {
  //   fetch("http://localhost:8080/api/structured-entity/all")
  //       .then(res => res.json())
  //       .then(data => setData(data))
  //   }, [])

  return (
      <div>
          <div className="entity">
            <div className="entityList">
              {EntityDBList.map((entityItem, key) => {
                return (
                  <EntityDBItem
                    key={key}
                    name={entityItem.name}
                    definition={entityItem.definition}
                  />
                );
              })}
            </div>
          </div>
          <div className="my-button">
            <button>Start Experiment</button>
            <button>Add New Entity</button>
          </div>
      </div>
  );
}

export default EntityDB;
