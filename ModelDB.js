import React from "react";
import { ModelDBList} from "../Helpers/ModelsData";
import ModelDBItem from "../Components/ModelsDBItem";
import "../Styles/ModelDB.css";

function ModelDB() {

  // const [data, setData] = React.useState([])
  // React.useEffect(() => {
  // fetch("http://localhost:8080/api/project/public")
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])

  return (
      <div>
          <div className="model">
            <div className="modelList">
              {ModelDBList.map((systemsItem, key) => {
                return (
                  <ModelDBItem
                    key={key}
                    name={systemsItem.name}
                    definition={systemsItem.definition}
                  />
                );
              })}
            </div>
          </div>
    <div className="my-button">
      <button>Start Experiment</button>
      <button>Add New Model</button>
    </div>
</div>
  );
}

export default ModelDB;
